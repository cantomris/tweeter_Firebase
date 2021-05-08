import { Model } from '@vuex-orm/core'
import User from './User'

export default class Comment extends Model {
  static entity = 'comments'

  static fields () {
    return {
      id: this.uid(),
      user_id: this.attr(null),
      body: this.attr(null),
      comment_id: this.uid(),
      comment_type: this.attr(null),
      user: this.belongsTo(User, 'user_id'),
      commentable: this.morphTo('comment_id', 'comment_type')
    }
  }
}
