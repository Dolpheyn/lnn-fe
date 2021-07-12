<template>
  <div>
    <q-btn 
      dense 
      round 
      flat 
      icon="shopping_cart" 
      text-color="grey"
      @click="cartDialog = true"
    >
      <q-badge color="deep-orange" floating>{{ $store.getters['cart/itemCount'] }}</q-badge>
    </q-btn>

    <q-dialog v-model="cartDialog">
      <q-card style="min-width: 50vw">
        <q-card-section class="q-pa-sm">
          <div class="text-h6">Cart</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="row justify-evenly q-pa-sm">
          <q-card style="width: 90%;">
            <q-card-section horizontal>
              <q-card-section>
                <q-icon name="delivery_dining" style="font-size: 2.5rem" />
              </q-card-section>
              <q-card-section class="q-pt-xs">
                <div class="text-caption text-grey">Estimated Delivery</div>
                <div class="text-h6 q-mt-sm q-mb-xs">Today, 14:00</div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-card-section>

        <q-card-section style="max-height: 70vh;" class="scroll">
          <div 
            v-for="item in $store.state.cart.items" 
            :key="item.id"
            class="q-my-sm"
          >
            <span class="q-mr-md">- + {{ item.quantity }}x</span> {{ item.name }} - RM {{ item.price }}
          </div>
        </q-card-section>

        <q-card-section style="background-color: lightgrey;">
          <b>Subtotal: RM {{ $store.getters['cart/subTotal'] }}</b>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Confirm" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShoppingCart',
  data() {
    const cartDialog = false

    return {
      cartDialog
    };
  },
  methods: {
  },
  computed: {
  }
});
</script>
