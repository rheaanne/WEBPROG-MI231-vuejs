<template>
  <div id="app">
    <h1>Food</h1>
    <food-item />
    <food-item2 />
    <food-item />

    <div class="personal-profile-container">
      <personal-profile />
    </div>

    <footer>
      <div class="gallery">
        <img src="image1.jpg" alt="Gallery Image 1" />
        <img src="image2.jpg" alt="Gallery Image 2" />
        <img src="image3.jpg" alt="Gallery Image 3" />
      </div>
    </footer>
  </div>
</template>

<script>
// Import the custom components here
import FoodItem from './components/FoodItem.vue'; 
import FoodItem2 from './components/FoodItem2.vue'; 
import PersonalProfile from './components/PersonalProfile.vue'; 

export default {
  name: "App",
  components: {
    FoodItem,
    FoodItem2,
    PersonalProfile
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  line-height: 1.8;
  margin: 0;
  padding: 0;
  background-color: #ffe4e9;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  text-align: center;
  margin-top: 20px;
  color: #ffffff;
  background-color: #d81b60;
  padding: 20px;
  border-radius: 8px;
}

h2 {
  color: #ffffff;
  background-color: #ec407a;
  padding: 10px;
  border-radius: 8px;
}

.personal-profile-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  padding: 20px;
  border-radius: 8px;
  margin-top: 2rem;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  flex-grow: 1;
}

.section {
  background-color: #ffffff;
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

footer {
  padding: 20px;
  background-color: #f8bbd0;
}

footer .gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  padding: 10px;
}

footer .gallery img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: transform 0.3s;
}

footer .gallery img:hover {
  transform: scale(1.05);
}

@media (max-width: 600px) {
  footer .gallery img {
    height: auto;
  }
}

</style>
