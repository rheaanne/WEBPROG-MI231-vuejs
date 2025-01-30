<template>
  <div id="app">
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
import { supabase } from './lib/supabaseClient'; // Correct path
import FoodItem from './components/FoodItem.vue';
import FoodItem2 from './components/FoodItem2.vue';
import PersonalProfile from './components/PersonalProfile.vue';

const countries = ref([]);

async function getCountries() {
  try {
    const { data, error } = await supabase.from('countries').select();
    if (error) throw error;
    countries.value = data || []; // Ensure a default value
  } catch (err) {
    console.error('Error fetching countries:', err.message);
  }
}

onMounted(getCountries);
</script>
<style scoped>
#app {
  font-family: Arial, sans-serif;
  padding: 1.5rem;
  text-align: center;
  background-color: #fdfdfd;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
}

.section {
  background-color: rgb(205, 96, 163);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.flex-container.row {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
