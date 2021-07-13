<template>
  <q-page class="q-pt-xl q-px-xl q-mx-xl">
    <!--Active Delivery-->

    <!--Available Deliveries-->
  </q-page>
</template>

<script lang="ts">
import { Order } from 'components/models';
import { OrderStatus, getAllOrderStatuses } from 'components/enums'
import { defineComponent } from 'vue';

const orders: Order[] = [
]

export default defineComponent({
  name: 'PageIndex',
  components: {},
  data() {
    const orderList: Order[] = orders;
    const orderStatuses: OrderStatus[] = getAllOrderStatuses();


    return { orderList, orderStatuses };
  },
  methods: {
  }
});
</script>
