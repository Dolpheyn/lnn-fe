<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-section>
        <q-list>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import { defineComponent } from 'vue';

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
  name: 'PageIndex',
  components: { EssentialLink },
  data() {
    const essentialLinks = linksList;

    return { essentialLinks };
  }
});
</script>
