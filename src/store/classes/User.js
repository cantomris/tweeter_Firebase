import { Model } from '@vuex-orm/core'
import Image from './Image'
import Post from './Post'
import Kwarg from './Kwarg'
import bus from 'src/bus/index'
import UserLikedPost from './UserLikedPost'
import Comment from './Comment'
import firebase from 'firebase'

export default class User extends Model {
  static entity = 'users'
  static primaryKey = 'email'

  get nickName () {
    return `@${this.first_name}${this.last_name}`.toLowerCase()
  }
  // get nickName () {
  //   const smth = this.email.split('@', 1)
  //   return JSON.stringify(smth)
  // }

  static mutators (nickName) {
    return {
      nick_name (value) {
        return nickName
      }
    }
  }

  static fields () {
    return {
      id: this.uid(),
      first_name: this.attr(null),
      last_name: this.attr(null),
      avatar: this.attr(null),
      email: this.attr(null),
      password: this.attr(null),
      // relations
      comments: this.hasMany(Comment, 'user_id'),
      posts: this.hasMany(Post, 'user_id'),
      image: this.morphOne(Image, 'imageable_id', 'imageable_type'),
      user_liked_posts: this.hasMany(UserLikedPost, 'user_id'),
      likedPosts: this.hasManyThrough(Post, UserLikedPost, 'user_id', 'post_id')
    }
  }

  static async loginWithCredentials (credentials) {
    // const user = this.find(credentials.email)
    // if (!user) {
    //   alert('There is no such user')
    // }
    // if (user.password !== credentials.password) {
    //   return false
    // }
    const user = await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((credentials) => {
        // Signed in
        const user = credentials.user
        // ...
        console.log(user)
        return user
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
    if (!user) {
      console.log('User not available')
      return false
    } else {
      console.log('User available')
      Kwarg.$set('auth.user.email', user.email)
      bus.$emit('login', this.getAuthenticated())
      return true
    }
  }

  static async signupWithCredentials (credentials) {
    await firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((credentials) => {
        // Signed in
        // const user = credentials.user
        // ...
        Kwarg.$set('auth.user.email', credentials.email)
        bus.$emit('login', this.getAuthenticated())
        return true
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        // ..
      })
  }

  static getAuthenticated () {
    const email = Kwarg.$get('auth.user.email')
    const user = this.find(email)
    return user
  }

  static async logout () {
    await firebase.auth().signOut().then(() => {
      // Sign-out successful.
      Kwarg.delete('auth.user.email')
      bus.$emit('logout')
      return true
    }).catch((error) => {
      // An error happened.
      console.log(error)
    })
  }
}
