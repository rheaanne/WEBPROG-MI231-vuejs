<template>
  <div class="grid-container">
    <section class="section">
      <h2>About Me</h2>
      <div class="flex-container">
        <p>
          Hello, I'm Rhea. You can call me "Eyya." I'm a province girl from Isabela. An anonymous person gave me the
          opportunity to continue my studies at a college here in Makati. I never thought I would leave my small town
          and move to the big city.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>Education & Achievements</h2>
      <div class="flex-container">
        <p><strong>Elementary:</strong> Binguang Elementary School (2016-2017)</p>
        <p><strong>Secondary:</strong> San Pablo National High School (2020-2021) - Graduated with Honors</p>
        <p><strong>Senior High:</strong> San Pablo National High School (2022-2023) - Graduated with Honors</p>
        <p><strong>Tertiary:</strong> Asia Pacific College (2022-2023)</p>
        <ul>
          <li>Executive Director of APC-MSC Membership Committee</li>
          <li>With Honors (2023-2024)</li>
        </ul>
        <p><strong>Course:</strong> Bachelor of Science in Information Technology</p>
      </div>
    </section>

    <section class="section">
      <h2>IT Experience</h2>
      <div class="flex-container">
        <p>
          In my first year, I gained experience coding with Java and Python. I learned basic tools for using a computer,
          though my knowledge was limited in high school.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>Hobbies & Interests</h2>
      <div class="flex-container row">
        <p>
          I love reading books, exploring technology, engaging in sports, and finding all sorts of engaging things to
          do.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>Goals in Life</h2>
      <div class="flex-container">
        <p>My dream is to pursue an IT degree and start my own tech company.</p>
      </div>
    </section>
  </div>

  <footer>
    <h2>Picture Gallery</h2>
    <div class="gallery">
      <img src="https://i.ibb.co/wgYmVKb/image1.jpg" alt="Gallery Image 1" />
      <img src="https://i.ibb.co/8j5PQKX/image2.jpg" alt="Gallery Image 2" />
      <img src="https://i.ibb.co/wJycv0v/image3.jpg" alt="Gallery Image 3" />
      <img src="https://i.ibb.co/JkcrR7M/image4.jpg" alt="Gallery Image 4" />
      <img src="https://i.ibb.co/pjXj3nv/image5.jpg" alt="Gallery Image 5" />
      <img src="https://i.ibb.co/TvdjQwF/image6.jpg" alt="Gallery Image 6" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "PersonalProfile",
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  flex-grow: 1;
}

.section {
  background-color:rgb(205, 96, 163);
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
