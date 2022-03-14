<template>
  <div class="question">
    <div class="illustration">
      <img :src="illustration" alt="illustration">
    </div>
    <div class="content">
      <img
          class="flag"
          v-if="questionAction === 'flag'"
          :src="question.flag"
          alt="flag">
      <p v-if="questionAction === 'capital'" class="card__title">{{ question.capital }} is the capital of</p>
      <p v-if="questionAction === 'flag'" class="card__title">Which country does this flag belong to?</p>
      <div class="answers">
        <div
            class="answer"
            v-for="(answer, index) in question.answers"
            :key="answer" @click="chooseResponse(answer)"
            :class="[
              answerSelected && answer === question.country ? 'goodAnswer' : '',
              answerSelected && answer === answerSelected ? 'badAnswer': '',
              answerSelected ? '' : 'not-selected']"
        >
          <div class="answer-content">
            <span>{{ ['A', 'B', 'C', 'D'][index] }}</span>
            <p>{{ answer }}</p>
          </div>
          <BadIcon v-if="answerSelected && answer === answerSelected && answer !== question.country" />
          <CorrectIcon v-if="answerSelected && answer === question.country" />
        </div>
      </div>
      <div v-if="answerSelected" class="button">
        <button @click="$emit('next-step', isGoodAnswer)">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import illustration from "../../assets/undraw_adventure_4hum 1.svg";
import './Question.scss';

import {defineProps, ref, computed} from "vue";
import { Question } from "../../types/Question";
import BadIcon from "../icons/BadIcon.vue";
import CorrectIcon from "../icons/CorrectIcon.vue";

// question type 'capital' or 'flag'
type QuestionAction = 'capital' | 'flag';
const questionsActions: QuestionAction[] = ['capital', 'flag'];
const questionAction: QuestionAction = questionsActions[Math.floor(Math.random() * questionsActions.length)];

const answerSelected = ref<string>();

interface Props {
  question: Question
}

const { question } = defineProps<Props>();

const chooseResponse = (answer: string) => {
  if (!answerSelected.value) {
    answerSelected.value = answer;
  }
}

const isGoodAnswer = computed(() => answerSelected.value === question.country)
</script>

<style scoped>

</style>
