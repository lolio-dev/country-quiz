<template>
  <div>
    <h1 class="title">Country Quiz</h1>
    <div class="card">
      <Question v-if="!showResults && isLoaded" :question="question" @next-step="nextStep($event)"/>
      <Results v-if="showResults" :score="score" @try-again="tryAgain"/>

      <div v-if="!isLoaded" class="loading">
        <Spinner/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useApi from "./composables/useApi";
import {onMounted, ref} from "vue";
import Question from "./components/question/Question.vue";
import Results from "./components/results/Results.vue";
import Spinner from "./components/Spinner.vue";

const { loadQuestion, question, isLoaded } = useApi();

const showResults = ref<boolean>(false);
const score = ref<number>(0);

onMounted(() => {
  loadQuestion();
})

const nextStep = (isGoodAnswer: boolean) => {
  if (isGoodAnswer) {
    score.value++;
    loadQuestion();
  } else showResults.value = true;
}

const tryAgain = () => {
  score.value = 0;
  showResults.value = false;
  loadQuestion();
}

</script>

<style lang="scss"></style>
