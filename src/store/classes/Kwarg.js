import { Model } from '@vuex-orm/core'

export default class Kwarg extends Model {
  static entity = 'kwargs'
  static primaryKey = 'key'

  static fields () {
    return {
      key: this.attr(null),
      value: this.attr(null)
    }
  }

  static $get (key, defaultValue = null) {
    const kwarg = this.find(key)
    if (!kwarg) {
      return defaultValue
    }
    return kwarg.value
  }

  static async $set (key, value) {
    return this.insertOrUpdate({
      data: {
        key,
        value
      }
    })
  }

  static async $toggle (key, defaultValue = false) {
    const currentValue = this.$get(key, defaultValue)
    return Kwarg.$set(key, !currentValue)
  }
}
