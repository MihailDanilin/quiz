import { myHTTP } from "./api.js";
let cont = document.querySelectorAll(".cont");
let categoryItem = document.querySelectorAll(".category-item");
let difficultyItem = document.querySelectorAll(".difficulty-item");
let params = {
  category: "",
  difficulty: "",
};
chooseDifficulty();
chooseCategory();
console.log(categoryItem);
cont.forEach((e, i) => {
  e.querySelector("button").addEventListener("click", () => {
    e.classList.remove("active");
    if (i == 2) {
      questionsServise.getQuestions(
        params.category,
        params.difficulty,
        getResponse
      );
      return;
    }
    cont[i + 1].classList.add("active");
  });
});
function chooseCategory() {
  categoryItem.forEach((e) => {
    e.addEventListener("click", () => {
      resetCategory();
      e.style.color = "#ff5bb2";
      params.category = e.dataset.name;
      document.querySelectorAll(".button")[1].classList.add("active-button");
    });
  });
}
function resetCategory() {
  categoryItem.forEach((e) => {
    e.style.color = "white";
  });
}
function chooseDifficulty() {
  difficultyItem.forEach((e) => {
    e.addEventListener("click", () => {
      resetDifficulty();
      e.style.color = "#ff5bb2";
      params.difficulty = e.dataset.name;
      document.querySelectorAll(".button")[2].classList.add("active-button");
    });
  });
}
function resetDifficulty() {
  difficultyItem.forEach((e) => {
    e.style.color = "white";
  });
}
let http = myHTTP();
let service = () => {
  let triviaUrl = "https://the-trivia-api.com/api/questions";
  return {
    getQuestions(category, difficulty, cb) {
      http.get(
        `${triviaUrl}?categories=${category}&limit=10&difficulty=${difficulty}`,
        cb
      );
    },
  };
};
let questionsServise = service();
function getResponse(data, error) {
  if (error) {
    alert("Произошла ошибка, страница будет перезагружена автоматически.");
    document.location.reload();
    return;
  }
  renderQuestion(data);
}
function renderQuestion(data) {
  let fragment = "";
  data.forEach((e, i) => {
    fragment += questionTemplate(e, i);
  });
  document.body.insertAdjacentHTML("beforeend", fragment);
}
function questionTemplate(
  { question, correctAnswer, incorrectAnswers: [answer1, answer2, answer3] },
  index
) {
  return `<div class="cont ${index == 0 ? "active" : ""}">
  <h1 class="question">${question}</h1>
  <div class="answers">
    <p class="answer-item">${correctAnswer}</p>
    <p class="answer-item">${answer1}</p>
    <p class="answer-item">${answer2}</p>
    <p class="answer-item">${answer3}</p>
  </div>
  <button class="button active-button">ОТВЕТИТЬ</button>
</div>`;
}
