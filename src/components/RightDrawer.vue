<template>
  <q-drawer show-if-above v-model="right" side="right" bordered>
    <q-input class="q-mt-sm q-mx-md" dense rounded outlined :label="$i18n.t('Search')">
      <template v-slot:prepend>
        <q-icon name="search" size="sm"/>
      </template>
    </q-input>
<!-- POSTS here -->

    <q-toolbar-title class="text-weight-bold q-mt-md">
      {{ $i18n.t('Trends for you') }}
    </q-toolbar-title>
    <q-list padding separator>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label class="text-grey" overline>Education</q-item-label>
          <q-item-label class="text-weight-bold" >
            {{ 'post.title' }}
          </q-item-label>
          <q-item-label caption lines="2">
            {{ 'post.body' }}
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>
            {{ 'post.relativeTime' }}
          </q-item-label>
          <q-icon name="star" color="yellow" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>

export default {
  data () {
    return {
      right: false
    }
  }
}
</script>
