import { Model } from '@vuex-orm/core'
import User from './User'

export default class Profile extends Model {
  static entity = 'profiles'

  static fields () {
    return {
      id: this.uid(),
      bio: this.attr(null),
      friends: this.attr(null),
      user_id: this.uid(),
      user: this.belongsTo(User, 'user_id')
    }
  }
}
