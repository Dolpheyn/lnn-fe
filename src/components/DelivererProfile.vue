<template>
  <div>
    <q-btn 
      dense 
      round 
      flat 
      icon="account_circle" 
      text-color="grey"
      @click="profileDialog = true"
    />

    <q-dialog v-model="profileDialog">
      <q-card style="min-width: 50vw">
        <q-card-section class="q-pa-sm">
          <div class="text-h6">Deliverer profile</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="row justify-evenly q-pa-sm">
          <q-card style="width: 90%;">
            <q-card-section horizontal>
              <q-card-section>
                <q-icon name="face" style="font-size: 2.5rem" />
              </q-card-section>
              <q-card-section class="q-pt-xs" style="width: 100%">
                <div class="text-h6 text-grey">Faris</div>
                <div class="text-caption q-mt-sm q-mb-xs">
                  Claimable Commission
                  <span style="position: absolute; right: 30px"><b>RM 20.00</b></span>
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Claim Commission" color="primary" v-close-popup />
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
    return {
      profileDialog: false,
    };
  },
  methods: {
  },
  computed: {
  }
});
</script>
