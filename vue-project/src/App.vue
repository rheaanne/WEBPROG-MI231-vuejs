<template>
  <div id="app">
    <h1>Food</h1>
    <food-item />
    <food-item2 />
    <food-item />

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
  background-color:rgb(238, 103, 170);
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.personal-profile-container {
  border: 2px solid pink;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 8px;
}
</style>
