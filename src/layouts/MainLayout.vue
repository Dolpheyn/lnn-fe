<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: white;color: black;">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Bert's Delivery App
        </q-toolbar-title>

        <shopping-cart v-if="$route.path === '/menu'" />
        <deliverer-profile v-if="$route.path === '/deliveries'" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DelivererProfile from 'components/DelivererProfile.vue'
import EssentialLink from 'components/EssentialLink.vue'
import ShoppingCart from 'components/ShoppingCart.vue'

const linksList = [
  {
    title: 'Menu',
    caption: 'Bert\'s menu.',
    icon: 'menu_book',
    link: '/menu'
  },
  {
    title: 'Deliveries',
    caption: 'Active, available and past deliveries.',
    icon: 'delivery_dining',
    link: '/deliveries'
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    DelivererProfile,
    EssentialLink,
    ShoppingCart,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksList
    }
  },

  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
  })
</script>
