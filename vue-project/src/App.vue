<template>
  <div id="app">
    <h1>Food</h1>
    <food-item />
    <food-item2 />
    <food-item />
  </div>
</template>

<script>
import FoodItem from './components/FoodItem.vue';
import FoodItem2 from './components/FoodItem2.vue';

export default {
  name: 'App',
  components: {
    FoodItem,
    FoodItem2,
  },
};
</script>

<style>
/* Add global styles here if needed */
</style>
