<template>
  <h1>Food</h1>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
  <br>
  <food-item />
  <food-item2 />
  <food-item />
  <personal-profile />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import FoodItem from '@/components/FoodItem.vue' // Ensure correct path
import FoodItem2 from '@/components/FoodItem2.vue' // Ensure correct path
import PersonalProfile from '@/components/PersonalProfile.vue' // Ensure correct path

const supabaseUrl = 'https://tarftmmhhbslgntaoxgp.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const countries = ref([])

async function getCountries() {
  const { data, error } = await supabase.from('countries').select('*')
  if (error) {
    console.error('Error fetching countries:', error.message)
  } else {
    countries.value = data
  }
}

onMounted(() => {
  getCountries()
})
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
