import { Question } from "../types/Question";
import axios, {AxiosResponse} from "axios";
import {ref} from "vue";

const useQuestion = () => {
  const isLoaded = ref<boolean>();
  const question = ref<Question>();

  const loadQuestion = async () => {
    try {
      isLoaded.value = false;
      const res: AxiosResponse = await axios.get('https://restcountries.com/v3.1/all');
      let countries = await res.data;
      const country = countries[Math.floor(Math.random() * countries.length)];
      countries.filter((country_: any) => country_.name.common !== country.name.common);
      const answers = countries
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((country: any) => country.name.common)

      answers.push(country.name.common)

      isLoaded.value = true;

      question.value = {
        country: country.name.common,
        capital: country.capital[0],
        flag: country.flags.svg,
        answers: answers
      }

    } catch (e: any) {
      console.error(e)
    }
  };

  return { loadQuestion, isLoaded, question };
};

export default useQuestion;
