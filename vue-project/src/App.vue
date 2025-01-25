<template>
  <div id="app">
    <h1>Food</h1>
    <div class="food-container">
      <food-item />
      <food-item2 />
      <food-item />
    </div>

    <!-- Personal Profile Component -->
    <div class="personal-profile-container">
      <personal-profile />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
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
  justify-content: space-around; /* Aligns items with space between */
  gap: 1rem; /* Adds space between items */
  margin-bottom: 2rem;
}

.personal-profile-container {
  border: 2px solid pink;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 8px;
  display: flex;
  justify-content: center; /* Centers the profile horizontally */
  align-items: center; /* Centers the profile vertically */
}
</style>
