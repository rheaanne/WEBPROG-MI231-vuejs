<template>
  <div id="app">
    <h1>Food</h1>
    <food-item />
    <food-item2 />
    <food-item />

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

.personal-profile-container {
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  border: 2px solid pink;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 8px;
  height: 300px; /* Set a fixed height to center vertically */
}
</style>
