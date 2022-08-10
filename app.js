let cont = document.querySelectorAll(".cont");
let categoryItem = document.querySelectorAll(".category-item");
let difficultyItem = document.querySelectorAll(".difficulty-item");
chooseDifficulty();
chooseCategory();
console.log(categoryItem);
cont.forEach((e, i) => {
  e.querySelector("button").addEventListener("click", () => {
    e.classList.remove("active");
    cont[i + 1].classList.add("active");
  });
});
function chooseCategory() {
  categoryItem.forEach((e) => {
    e.addEventListener("click", () => {
      resetCategory();
      e.style.color = "#ff5bb2";
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
      document.querySelectorAll(".button")[2].classList.add("active-button");
    });
  });
}
function resetDifficulty() {
  difficultyItem.forEach((e) => {
    e.style.color = "white";
  });
}
