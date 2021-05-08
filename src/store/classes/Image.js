import { Model } from '@vuex-orm/core'

export default class Image extends Model {
  static entity = 'images'

  static fields () {
    return {
      id: this.uid(),
      url: this.attr(null),
      post_id: this.uid(),
      user_id: this.uid(),
      imageable_id: this.uid(),
      imageable_type: this.attr(),
      imageable: this.morphTo('imageable_id', 'imageable_type')
      // relations
    }
  }
}
