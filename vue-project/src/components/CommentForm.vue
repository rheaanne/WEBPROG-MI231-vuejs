<template>
  <div class="comment-container">
    <h1>Leave a Comment</h1>
    
    <form @submit.prevent="submitComment">
      <div class="form-group">
        <label>Name:</label>
        <input v-model="name" type="text" required class="form-control" />
      </div>

      <div class="form-group">
        <label>Comment:</label>
        <textarea v-model="comment" required class="form-control"></textarea>
      </div>

      <button type="submit" class="btn">Submit</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <h1>Comments</h1>
    <ul>
      <li v-for="c in comments" :key="c.id">
        <strong>{{ c.name }}:</strong> {{ c.comment }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient'; // Ensure this file is correctly set up

const comments = ref([]);
const name = ref('');
const comment = ref('');
const errorMessage = ref('');

// Fetch comments from Supabase
async function getComments() {
  const { data, error } = await supabase
    .from('comments')
    .select()
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching comments:', error.message);
  } else {
    console.log('Fetched comments:', data); // Log the fetched comments
    comments.value = data;
  }
}

// Submit a new comment to Supabase
async function submitComment() {
  if (!name.value || !comment.value) {
    errorMessage.value = 'Please fill out all fields.';
    return;
  }

  errorMessage.value = ''; // Clear previous error before submitting

  const { error } = await supabase
    .from('comments')
    .insert([{ name: name.value, comment: comment.value }]);

  if (error) {
    errorMessage.value = 'Error submitting comment. Please try again.';
    console.error('Error submitting comment:', error.message);
  } else {
    name.value = '';
    comment.value = '';
    getComments(); // Refresh comments after successful submission
  }
}

// Load comments when the component is mounted
onMounted(getComments);
</script>

<style scoped>
/* Basic styling - Customize as needed */
.comment-container {
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
}

h1 {
  font-size: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

strong {
  font-weight: bold;
}
</style>
