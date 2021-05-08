import { Model } from '@vuex-orm/core'
import Image from './Image'
import User from './User'
import { formatDistance } from 'date-fns'
import UserLikedPost from './UserLikedPost'
import Comment from './Comment'
// import Kwarg from './Kwarg'

export default class Post extends Model {
  static entity = 'posts'

  get relativeTime () {
    return formatDistance(this.time_stamp, Date.now())
  }
  // static mutators () {
  //   return {
  //     time_stamp (value) {
  //       return formatDistance(value, Date.now())
  //     }
  //   }
  // }

  static deletePost (id) {
    Post.delete(id)
  }

  static likePost (id) {
    this.liked = !this.liked
    console.log(this.liked)
  }

  get isPostLiked () {
    return this.liked
  }

  static fields () {
    return {
      id: this.uid(),
      user_id: this.attr(null),
      title: this.attr(null),
      body: this.attr(null),
      time_stamp: this.attr(null),
      liked: this.attr(null),
      // relations
      user: this.belongsTo(User, 'user_id'),
      comments: this.morphMany(Comment, 'comment_id', 'comment_type'),
      image: this.morphOne(Image, 'imageable_id', 'imageable_type'),
      user_liked_posts: this.hasMany(UserLikedPost, 'post_id'),
      likedByUsers: this.hasManyThrough(User, UserLikedPost, 'post_id', 'user_id')
    }
  }
}
