<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          autogrow
          bottom-slots
          v-model="newTweet"
          :placeholder="$i18n.t('Whats happening?')"
          counter
          maxlength="280">
          <template v-slot:before>
            <q-avatar size="lg">
              <img :src="authenticatedUser.avatar">
            </q-avatar>
          </template>

        </q-input>
      </div>
      <div class="col col-shrink q-mb-lg">
        <q-btn
          @click="addNewTweet"
          :disable="!newTweet"
          no-caps
          rounded
          color="primary"
          :label="$i18n.t('Send')"/>
      </div>

    </div>

    <q-separator class="divider" size="10px" color="grey-"/>

    <q-list
      v-for="post in posts"
      :key="post.id"
      separator>

      <Tweet
        :post="post"
        @deleteTweet='deleteTweet'
        @toggleLikeTweet='toggleLikeTweet'/>
    </q-list>
  </q-page>
</template>

<script>
import Tweet from 'src/components/Tweet'
import db from 'src/boot/firebase'

export default {
  name: 'TimeLine',
  components: {
    Tweet
  },

  data () {
    return {
      newTweet: '',
      posts: []
    }
  },
  methods: {
    addNewTweet () {
      console.log(this.newTweet)
      const tweet = {
        body: this.newTweet,
        time_stamp: Date.now(),
        liked: false
      }
      // this.posts.unshift(tweet)
      db.collection('tweets').add(tweet)
        .then((docRef) => {
          console.log('Tweet id', docRef.id)
        })
        .catch(error => {
          console.error('Error', error)
        })
      this.newTweet = ''
    },
    deleteTweet (id) {
      db.collection('tweets').doc(id).delete().then(() => {
        console.log('Document successfully deleted!')
      }).catch((error) => {
        console.error('Error removing document: ', error)
      })
    },

    toggleLikeTweet (post) {
      db.collection('tweets').doc(post.id).update({
        liked: !post.liked
      })
        .then(() => {
          console.log('Document successfully updated!')
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error)
        })
    }
  },
  mounted () {
    db.collection('tweets').orderBy('time_stamp').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const tweetChange = change.doc.data()
        tweetChange.id = change.doc.id
        if (change.type === 'added') {
          console.log('New tweet: ', tweetChange)
          this.posts.unshift(tweetChange)
        }
        if (change.type === 'modified') {
          console.log('Modified tweet: ', tweetChange)
          const tweetToLike = this.posts.findIndex(tweet => tweet.id === tweetChange.id)
          Object.assign(this.posts[tweetToLike], tweetChange)
        }
        if (change.type === 'removed') {
          console.log('Removed tweet: ', tweetChange)
          const tweetToDelete = this.posts.findIndex(tweet => tweet.id === tweetChange.id)
          this.posts.splice(tweetToDelete, 1)
        }
      })
    })
  }
}
</script>

<style lang="sass" scoped>
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
</style>
