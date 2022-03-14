<template>
  <div class="results">
    <img :src="illustration" alt="illustration">
    <h1>Results</h1>
    <p class="score">You got <span>{{ score }}</span> correct answers</p>
    <button @click="$emit('try-again')">Try again</button>
  </div>
</template>

<script setup lang='ts'>
import illustration from "../../assets/undraw_winners_ao2o 2.svg";
import './Results.scss';
import {defineProps} from "vue";

interface Props {
  score: number
}

const { score } = defineProps<Props>();
</script>

<style scoped>

</style>
