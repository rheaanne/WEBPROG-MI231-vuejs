<template>
  <div>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.content }} - By: {{ comment.profiles?.display_name || 'Unknown User' }}
      </li>
    </ul>

    <h2>Leave a Comment</h2>
    <input type="text" v-model="commentText" placeholder="Your comment">
    <button @click="submitComment">Submit</button>
    <p v-if="submissionError">{{ submissionError }}</p> </div>
</template>
  
  <script></script>
  
  <style>
    #app > div {
      border: dashed black 1px;
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background-color: lightyellow;
    }
  </style>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])

async function getComments() {
  const { data } = await supabase.from('comments').select()
  comments.value = data
}

onMounted(() => {
  getComments()
})

</script>


<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightyellow;
  }
</style>