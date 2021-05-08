<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <!-- <q-btn label="Click me" color="primary" @click="persistent = true" /> -->

      <q-dialog v-model="isLoginModalOpen" transition-show="scale" transition-hide="scale">
        <q-card class="bg-white text-black" style="width: 300px; height:360px;">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="login" :label="$i18n.t('Login')" />
            <q-tab name="signup" :label="$i18n.t('Sign Up')" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="login">
              <q-card-section>
                <div class="text-h6">{{ $i18n.t('Welcome') }}</div>
              </q-card-section>
              <q-form
                @submit.prevent="onSubmitLogin"
                class="q-gutter-md"
                >
                <q-card-section class="q-pt-none">
                    <q-input rounded outlined dense v-model="form.email" :placeholder="$i18n.t('E-Mail')" />
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-input rounded outlined dense v-model="form.password" :placeholder="$i18n.t('Password')" />
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-blue-7">
                  <q-btn type="submit" flat label="Sign In" />
                </q-card-actions>
              </q-form>
            </q-tab-panel>

            <q-tab-panel name="signup">
              <q-card-section>
                <div class="text-h6">{{$i18n.t('Sign Up')}}</div>
              </q-card-section>
              <q-form
                @submit.prevent="onSubmitSignup"
                class="q-gutter-xsm"
                >
                <q-card-section class="q-pt-none">
                    <q-input rounded outlined dense v-model="signup.name" :placeholder="$i18n.t('Name')" />
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-input rounded outlined dense v-model="signup.email" :placeholder="$i18n.t('E-Mail')" />
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <q-input rounded outlined dense v-model="signup.password" :placeholder="$i18n.t('Password')" />
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <q-input rounded outlined dense v-model="signup.avatar" :placeholder="$i18n.t('Avatar')" />
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-blue-7">
                  <q-btn type="submit" flat :label="$i18n.t('Sign Up')" />
                </q-card-actions>
              </q-form>
            </q-tab-panel>

          </q-tab-panels>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import Kwarg from 'src/store/classes/Kwarg'
import User from 'src/store/classes/User'

export default {
  data () {
    return {
      isOpen: false,
      tab: 'login',
      form: {
        email: '',
        password: ''
      },
      signup: {
        name: '',
        email: '',
        password: '',
        avatar: ''
      }
    }
  },
  methods: {
    async onSubmitLogin () {
      const isLoggedIn = await User.loginWithCredentials(this.form)
      if (!isLoggedIn) {
        return alert(this.$i18n.t('Invalid Credentials'))
      }
      this.isLoginModalOpen = false
    },
    async onSubmitSignup () {
      await User.signupWithCredentials(this.signup)
      this.isLoginModalOpen = false
    }
  },
  computed: {
    isLoginModalOpen: {
      get () {
        return Kwarg.$get('isLoginModalOpen', false)
      },
      async set (isLoginModalOpen) {
        await Kwarg.$set('isLoginModalOpen', isLoginModalOpen)
      }
    }
  }
}
</script>
