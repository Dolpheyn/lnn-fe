<template>
  <q-page class="q-py-xl q-px-xl q-mx-xl">
    <!-- Search Bar -->
    <q-input 
      rounded 
      outlined 
      clearable 
      v-model="filterFoodName"
      @update:model-value="filterFoodList()" 
      label="Search" />

    <!-- Categories List -->
    <div class="row q-gutter-md q-my-sm">
      <div class="text-bold">Categories:</div>
      <div v-for="category in categories" :key="category" @click="filterCategory(category)">
        <q-btn
          v-if="filterCategories.includes(category)"
          color="deep-orange"
          text-color="white"
          size="sm"
          rounded
          no-caps
        >
          {{ category }}
        </q-btn>
        <q-btn
          color="secondary"
          size="sm"
          no-caps
          rounded
          v-else
        >
          {{ category }}
        </q-btn>
      </div>
    </div>

    <!-- Food List -->
    <div class="row q-gutter-md q-my-sm">
      <q-card v-for="food in foodList" :key="food.id" class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="">
            <q-img
              style="height: 200px;width: 200px;"
              :src="food.img"
            />
          </q-card-section>
          
          <q-card-section v-if="food.isAvailable" class="q-pt-xs">
            <div class="text-overline">{{food.category}}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{food.name}}</div>
            <div class="text-caption text-grey">
              {{food.description}}
            </div>
          </q-card-section>
          <q-card-section v-else class="q-pt-xs text-grey">
            <div class="text-overline">{{food.category}}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{food.name}} (Unavailable)</div>
            <div class="text-caption text-grey">
              {{food.description}}
            </div>
          </q-card-section>
        </q-card-section>

        <q-card-actions align="right" class="q-pb-md q-pr-md">
          <q-btn 
            v-if="food.isAvailable"
            class="q-mt-sm"
            label="Add To Cart"
            icon="shopping_cart"
            text-color="primary"
            @click="$store.dispatch('cart/addItem', { ...food, quantity: 1 })"
          />
          <q-btn 
            v-else
            disabled
            class="q-mt-sm"
            label="Add To Cart"
            icon="shopping_cart"
            text-color="primary"/>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Food } from 'components/models';
import { FoodCategory, getAllFoodCategories } from 'components/enums'
import { defineComponent } from 'vue';

function getImgUrl(text: string): string {
  return `https://via.placeholder.com/200x200.png/00eecc?text=${text}`
}

function lorem(): string {
  return  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}

const foods: Food[] = [
  {
    id: 0,
    name: 'Butter Chicken Set',
    category: FoodCategory.Meal,
    price: 16.0,
    description: lorem(),
    img: getImgUrl('Butter Chicken Set'),
    isAvailable: true,
  },
  {
    id: 1,
    name: 'Iced Mocha',
    category: FoodCategory.Drink,
    price: 8.0,
    description: lorem(),
    img: getImgUrl('Iced Mocha'),
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Fried Chicken',
    category: FoodCategory.AlaCarte,
    price: 15.0,
    description: lorem(),
    img: getImgUrl('Fried Chicken'),
    isAvailable: true,
  },
  {
    id: 3,
    name: 'French Fries',
    category: FoodCategory.Side,
    price: 5.50,
    description: lorem(),
    img: getImgUrl('French Fries'),
    isAvailable: false,
  }
]

export default defineComponent({
  name: 'PageIndex',
  components: {},
  data() {
    const foodList: Food[] = foods;
    const filterFoodName = ''
    const categories: FoodCategory[] = getAllFoodCategories()
    const filterCategories: FoodCategory[] = []


    return { categories, foodList, filterFoodName, filterCategories };
  },
  methods: {
    filterFoodList(): void {
      this.foodList = foods
                        .filter(food => {
                          if(!this.filterCategories.length) return true
                          return this.filterCategories.includes(food.category)
                        })
                        .filter(food => {
                          if(!this.filterFoodName.length) return true
                          return food.name.toLowerCase().includes(this.filterFoodName.toLowerCase())
                        })
    },

    filterCategory(category: FoodCategory): void {
      /**
       * Add `category` to `filterCategories` if it does not exist in the list,
       * else remove it.
       */
      if(!this.filterCategories.includes(category)) {
        this.filterCategories.push(category)
      } else {
        this.filterCategories = this.filterCategories.filter(c => c !== category)
      }

      this.filterFoodList()
    }
  }
});
</script>
<style scoped>
.my-card {
  width: 100%;
}
</style>
