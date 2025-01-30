<template>
  <div id="app">
    <h1>Countries</h1>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>

    <h1>Food</h1>
    <div class="food-container">
      <FoodItem />
      <FoodItem2 />
      <FoodItem />
    </div>

    <div class="personal-profile-container">
      <PersonalProfile />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from './lib/supabaseClient';
import FoodItem from './components/FoodItem.vue';
import FoodItem2 from './components/FoodItem2.vue';
import PersonalProfile from './components/PersonalProfile.vue';

const countries = ref([]);

async function fetchCountries() {
  try {
    const { data, error } = await supabase.from('countries').select();
    if (error) throw error;
    countries.value = data;
  } catch (err) {
    console.error('Error fetching countries:', err);
  }
}

onMounted(fetchCountries);
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  padding: 1.5rem;
  text-align: center;
  background-color: #fdfdfd;
}

.food-container {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin-bottom: 2rem;
}

.personal-profile-container {
  border: 2px solid pink;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
