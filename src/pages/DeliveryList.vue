<template>
  <q-page class="q-py-xl q-px-xl q-mx-xl">
    <!--Active Delivery-->
    <div class="q-my-md row justify-between">
      <div><h5 class="q-ma-none">Active Order</h5></div>
      <div>
        <q-btn
          size="sm"
          label="Complete All"
          icon="done"
          color="deep-orange"
          disable="!activeOrders.length"
          @click="completeAllActiveOrders()"
        />
      </div>
    </div>
    <div class="text-secondary text-description" v-if="!activeOrders.length">No active order, go claim one!</div>
    <div v-else class="row q-gutter-md q-my-sm">
      <q-card v-for="activeOrder in activeOrders " :key="activeOrder.id" class="my-card" bordered>
        <q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5">#{{activeOrder.id}}</div>
            <div class="text-h6">{{activeOrder.customer.name}}</div>
            <div class="text-overline">{{activeOrder.customer.phoneNumber}}</div>
            <div class="text-description">{{activeOrder.customer.address}}</div>
          </q-card-section>
        </q-card-section>

        <q-card-actions align="right" class="q-pb-md q-pr-md">
          <q-btn
            class="q-mt-sm"
            label="Complete Order"
            text-color="primary"
            @click="completeOrder(activeOrder.id)"
          />
        </q-card-actions>
      </q-card>
    </div>

    <!--Available Deliveries-->
    <h5>Ready For Pickups</h5>
    <div class="text-secondary text-description" v-if="!readyForPickups.length">
      No orders are ready for pick up
    </div>
    <div v-else class="row q-gutter-md q-my-sm">
      <q-card
        v-for="order in readyForPickups"
        :key="order.id"
        flat
        bordered
        class="my-card"
        style="min-width: 100%"
      >
        <q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5">#{{order.id}}</div>
            <div class="text-h6">{{order.customer.name}}</div>
            <div class="text-overline">{{order.customer.phoneNumber}}</div>
            <div class="text-description">{{order.customer.address}}</div>
          </q-card-section>
        </q-card-section>

        <q-card-actions align="right" class="q-pb-md q-pr-md">
          <q-btn
            class="q-mt-sm"
            label="Claim Order"
            text-color="primary"
            @click="claimOrder(order.id)"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Order, Customer, Deliverer } from 'components/models';
import { OrderStatus, getAllOrderStatuses } from 'components/enums'
import { defineComponent } from 'vue';

const faris: Deliverer = {
  id: 0,
  name: 'Faris',
  email: 'faris@gmail.com',
  phoneNumber: '011-12344416',
  claimableComission: 0,
}

const customers: Customer[] = [
  {
    id: 0,
    name: 'Khairunuqman',
    phoneNumber: '011-42331450',
    email: 'khairunuqman@gmail.com',
    address: 'A-3-4, Diamond Heights Appartment, Jalan Devhaus 3/8, Seksyen 7, Shah Alam'
  },
  {
    id: 1,
    name: 'Arif',
    phoneNumber: '011-78331450',
    email: 'arifruszaini@gmail.com',
    address: 'A-3-4, Diamond Heights Appartment, Jalan Devhaus 3/8, Seksyen 7, Shah Alam'
  },
  {
    id: 2,
    name: 'Syamimi',
    phoneNumber: '011-12341451',
    email: 'syamimikhalil@gmail.com',
    address: 'No 3, Jalan Richiamo 3/8, Seksyen 7, Shah Alam'
  },
  {
    id: 3,
    name: 'Hanis',
    phoneNumber: '013-12341451',
    email: 'haniszahirah@gmail.com',
    address: 'No 8, Jalan Richiamo 3/8, Seksyen 7, Shah Alam'
  },
]

const orders: Order[] = [
  { id: 0, status: OrderStatus.ReadyForPickup, customer: customers[0], deliverer: null },
  { id: 1, status: OrderStatus.ReadyForPickup, customer: customers[1], deliverer: null },
  { id: 2, status: OrderStatus.ReadyForPickup, customer: customers[2], deliverer: null },
  { id: 3, status: OrderStatus.ReadyForPickup, customer: customers[3], deliverer: null },
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
    claimOrder(id: number): void {
      const order = this.orderList.find(o => o.id === id)
      if(!order) return

      order.deliverer = faris
      order.status = OrderStatus.OutForDelivery
    },

    completeOrder(id: number): void {
      const order = this.orderList.find(o => o.id === id)
      if(!order) return

      order.status = OrderStatus.Completed
    },

    completeAllActiveOrders(): void {
      for(const order of this.activeOrders) {
        this.completeOrder(order.id)
      }
    }
  },

  computed: {
    activeOrders(): Order[] {
      return this.orderList
        .filter(o => o.status === OrderStatus.OutForDelivery)
        .filter(o => o.deliverer && o.deliverer.id === faris.id)
    },

    readyForPickups(): Order[] {
      return this.orderList
        .filter(order => order.status === OrderStatus.ReadyForPickup)
    },
  }
});
</script>
<style scoped>
.my-card {
  width: 100%;
}
</style>
