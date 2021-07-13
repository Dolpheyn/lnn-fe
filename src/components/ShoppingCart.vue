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
                <q-icon color="deep-orange" name="delivery_dining" style="font-size: 2.5rem" />
              </q-card-section>
              <q-card-section class="q-pt-xs">
                <div class="text-caption text-grey">Estimated Delivery</div>

                <!-- Memang takkan sampai huahsuhaushaus -->
                <div class="text-h6 q-mt-sm q-mb-xs">Today, {{ thirtyMinutesFromNow }}</div>
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
            <q-btn-group flat class="q-mr-md">
              <q-btn
                size="sm"
                color="white"
                text-color="accent"
                icon="add"
                @click="$store.dispatch('cart/incrementQuantity', item.id)" />
              <q-btn
                size="sm"
                color="white"
                text-color="accent"
                icon="remove"
                @click="$store.dispatch('cart/decrementQuantity', item.id)" />
            </q-btn-group>
            <span class="q-mr-md">{{ item.quantity }}x</span>
            {{ item.name }}
            <span style="position: absolute;right: 40px">RM {{ item.price }}</span>
          </div>
        </q-card-section>

        <q-card-section style="background-color: lightgrey;">
          <b>
            Subtotal:
            <span style="position: absolute; right: 40px">RM {{ $store.getters['cart/subTotal'] }}</span>
          </b>
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
import { date } from 'quasar';
const { addToDate, formatDate } = date;

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
    thirtyMinutesFromNow(): string {
      const newDate = addToDate(new Date(), { minutes: 30 })
      return formatDate(newDate, 'HH:mm')
    }
  }
});
</script>
