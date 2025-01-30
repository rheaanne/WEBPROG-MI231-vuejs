<template>
  <h1>Food</h1>
     <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
    <br>
  <food-item/>
  <food-item2/>
  <food-item/>
  <personal-profile/> 
</template>

 <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()
    countries.value = data
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
