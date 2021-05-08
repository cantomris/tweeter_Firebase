<template>
  <div>
    <transition
      appear
      enter-active-class="animated fadeIn slower"
      leave-active-class="animated fadeOut slower"
    >
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar class="user_avatar">
            <img src="post.user.avatar">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <!-- <strong>{{ post.user.first_name }}</strong> -->
            <span class="text-grey-7"> {{ 'post.user.nickName' }}
              <br class="lt-sm">&bull; {{ post.time_stamp | relativeDate}}
            </span>
          </q-item-label>
          <q-item-label class="tweet_content text-body1">{{ post.body }}
          </q-item-label>
          <q-item-label class="q-py-md" v-if="post.image">
            <img class="post_image" :src="post.image.url" alt="">
          </q-item-label>
          <div
            class="row justify-between q-mt-sm tweet_icons">
            <!-- <div
            v-for="tweetIcon in tweetOptions"
            :key="tweetIcon.icon">
              <q-btn
                clickable
                flat
                round
                color="grey"
                size="sm"
                :icon="tweetIcon.icon" />
            </div> -->
            <q-btn
              @click="openCommentModal"
              flat round
              color="grey"
              size="sm"
              icon="far fa-comment" >
              <q-tooltip
                anchor="bottom middle" self="top middle" :offset="[2, 2]">
                {{ $i18n.t('Comment') }}
              </q-tooltip>
            </q-btn>
            <q-btn
              flat round
              color="grey"
              size="sm"
              icon="fab fa-forumbee" >
              <q-tooltip
                anchor="bottom middle" self="top middle" :offset="[2, 2]">
                {{ $i18n.t('Follow') }}
              </q-tooltip>
            </q-btn>
            <q-btn
              flat round
              color="grey"
              size="sm"
              icon="fas fa-retweet" >
              <q-tooltip
                anchor="bottom middle" self="top middle" :offset="[2, 2]">
                {{ $i18n.t('Share') }}
              </q-tooltip>
            </q-btn>
            <q-btn
              @click="toggleLikeTweet(post)"
              flat round
              :color="post.liked ? 'light-blue' : 'grey'"
              size="sm"
              :icon="post.liked ? 'fas fa-heart' : 'far fa-heart'" >
              <q-tooltip
                anchor="bottom middle" self="top middle" :offset="[2, 5]">
                {{ $i18n.t('Like') }}
              </q-tooltip>
            </q-btn>
            <q-btn
              @click="isPostBelongsToCurrentUser ? deleteTweet(post.id) : null"
              flat
              round
              color="grey"
              size="sm"
              :icon="isPostBelongsToCurrentUser ? 'far fa-trash-alt' : 'fas fa-upload'" >
              <q-tooltip
                anchor="bottom middle" self="top middle" :offset="[2, 2]">
                {{ $i18n.t('Delete') }}
              </q-tooltip>
            </q-btn>
          </div>
        </q-item-section>

      </q-item>
    </transition>
    <q-separator size="1px" color="grey-4"/>
  </div>
</template>

<script>
import { formatDistance } from 'date-fns'
import Kwarg from 'src/store/classes/Kwarg'
// import db from 'src/boot/firebase'
// import Post from 'src/store/classes/Post'
// import UserLikedPost from 'src/store/classes/UserLikedPost'

export default {
  props: ['post'],
  methods: {
    deleteTweet (id) {
      this.$emit('deleteTweet', id)
    },

    openCommentModal () {
      Kwarg.$toggle('isCommentModalOpen')
    },

    toggleLikeTweet (id) {
      this.$emit('toggleLikeTweet', id)
    }
  },
  computed: {
    isPostBelongsToCurrentUser () {
      return this.authenticatedUser && this.authenticatedUser.id === this.post.id ? true : null
    }
  },

  filters: {
    relativeDate (value) {
      return formatDistance(value, new Date())
    }
  }
}
</script>

<style lang="sass" scoped>

.tweet_content
  white-space: pre-line

.tweet_icons
  margin-left: -8px

.user_avatar img
  object-fit: cover

.post_image
  width: 200px
  height: 200px
  border-radius: 14px
</style>
