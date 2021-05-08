<template>
  <q-layout view="lHr LpR fFf" class="main_container">
    <LoginModal />
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <!-- TODO Leftdrawer and profile picture simultaniously  -->
        <q-item
          v-if="$q.screen.lt.sm"
          clickable
          class="q-px-none"
          @click="toggleMobileMenu" >
            <q-avatar size="lg" class="user_avatar">
              <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="">
            </q-avatar>
        </q-item>

        <q-toolbar-title class="text-weight-bold">
          {{ $i18n.t(pageTitle) }}
        </q-toolbar-title>
        <!-- <q-icon name="fab fa-earlybirds" size="md" color="blue" class="q-pa-sm lt-sm absolute-center"/> -->

        <q-btn
          v-if="!authenticatedUser"
          color="primary"
          no-caps
          @click="openLoginModal">
          {{$i18n.t('Login')}}
        </q-btn>

        <q-btn
          @click="userLogout"
          v-if="authenticatedUser"
          color="primary"
          no-caps>
          {{$i18n.t('Logout')}}
        </q-btn>

      </q-toolbar>
    </q-header>

    <LeftDrawer />

    <RightDrawer/>

    <CommentBox/>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>

import RightDrawer from 'src/components/RightDrawer'
import LeftDrawer from 'src/components/LeftDrawer'
import LoginModal from 'src/components/LoginModal'
import Kwarg from 'src/store/classes/Kwarg'
import User from 'src/store/classes/User'
import CommentBox from 'src/components/CommentBox.vue'
export default {
  components: {
    RightDrawer,
    LeftDrawer,
    LoginModal,
    CommentBox
  },
  data () {
    return {
      left: false,
      right: false
    }
  },
  methods: {
    openLoginModal () {
      Kwarg.$toggle('isLoginModalOpen')
    },
    toggleMobileMenu () {
      Kwarg.$toggle('isLeftDrawerOpen')
    },
    async userLogout () {
      await User.logout()
    }
  },
  computed: {
    pageTitle () {
      return this.$route.name
    }
  }
}
</script>
