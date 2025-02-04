<template>
    <div>
      <h2>Leave a Comment</h2>
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required class="form-control">
        </div>
        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea id="comment" v-model="comment" required class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div v-if="submissionStatus" class="mt-2">
          {{ submissionStatus }}
        </div>
      </form>
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