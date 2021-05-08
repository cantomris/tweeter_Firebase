<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>

import authenticatedUserMixin from 'src/mixins/auth/authenticatedUserMixin'

export default {
  name: 'App',
  mixins: {
    authenticatedUserMixin
  }
}
</script>
