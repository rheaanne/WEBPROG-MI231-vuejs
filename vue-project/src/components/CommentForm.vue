<template>
  <div>
    <h1>Leave a Comment</h1>
    <form @submit.prevent="submitComment">
      <label>Name:</label>
      <input v-model="name" type="text" required />
      
      <label>Comment:</label>
      <textarea v-model="comment" required></textarea>
      
      <button type="submit">Submit</button>
    </form>
    
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}:</strong> {{ comment.comment }}
      </li>
    </ul>
  </div>
</template>

  
 <script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])
const name = ref('')
const comment = ref('')
const errorMessage = ref('')

async function getComments() {
  const { data, error } = await supabase.from('comments').select()
  if (error) {
    console.error('Error fetching comments:', error.message)
  } else {
    comments.value = data
  }
}

async function submitComment() {
  if (!name.value || !comment.value) {
    errorMessage.value = 'Please fill out all fields.'
    return
  }

  const { error } = await supabase
    .from('comments')
    .insert([{ name: name.value, comment: comment.value }])

  if (error) {
    errorMessage.value = 'Error submitting comment. Please try again.'
    console.error('Error submitting comment:', error.message)
  } else {
    name.value = ''
    comment.value = ''
    errorMessage.value = ''
    getComments() // Refresh comments
  }
}

onMounted(getComments)
</script>


  
  <style scoped>
  /* Basic styling - Customize as needed */
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
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
  </style>