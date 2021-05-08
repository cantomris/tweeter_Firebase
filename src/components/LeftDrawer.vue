<template>
<div>
  <q-drawer
    :mini="$q.screen.lt.lg"
    :breakpoint="500"
    :width="250"
    show-if-above
    v-model="isLeftDrawerOpen"
    side="left"
    bordered>

    <q-icon name="fab fa-forumbee" size="sm" color="blue" class="q-px-md q-py-md"/>

    <q-list v-for="item in leftDrawerItems" :key="item.id">
      <q-item clickable v-ripple exact :to="item.to">
        <q-item-section avatar>
          <q-icon outlined :name="item.icon" size="sm"/>
        </q-item-section>

        <q-item-section class="text-weight-bold">{{ $i18n.t(item.name) }}</q-item-section>
      </q-item>
    </q-list>

  </q-drawer>
</div>
</template>

<script>
import Kwarg from 'src/store/classes/Kwarg'
export default {
  data () {
    return {
      left: false,
      leftDrawerItems: [
        {
          id: 1,
          name: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          id: 2,
          name: 'About',
          icon: 'help',
          to: 'About'
        },
        {
          id: 3,
          name: 'Explore',
          icon: '#',
          to: 'Explore'
        },
        {
          id: 4,
          name: 'Messages',
          icon: 'mail',
          to: 'Messages'
        },
        {
          id: 5,
          name: 'Bookmarks',
          icon: 'bookmark',
          to: 'Bookmarks'
        },
        {
          id: 6,
          name: 'Lists',
          icon: 'list',
          to: 'Lists'
        },
        {
          id: 7,
          name: 'Profile',
          icon: 'style',
          to: 'Profile'
        },
        {
          id: 8,
          name: 'More',
          icon: 'more',
          to: 'More'
        }
      ]
    }
  },
  computed: {
    isLeftDrawerOpen: {
      get () {
        return Kwarg.$get('isLeftDrawerOpen', false)
      },
      async set (isLeftDrawerOpen) {
        await Kwarg.$set('isLeftDrawerOpen', isLeftDrawerOpen)
      }
    }
  }
}
</script>
