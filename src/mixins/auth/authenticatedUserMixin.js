import Vue from 'vue'
import User from 'src/store/classes/User'

const authenticatedUserMixin = Vue.mixin({
  computed: {
    authenticatedUser () {
      return User.getAuthenticated()
    }
  }
})

export default authenticatedUserMixin
