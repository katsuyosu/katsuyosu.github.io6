const list = document.querySelector("#list");
const checkDelete = document.querySelector("#check-delete");
const checkNone = document.querySelector("#check-none");

questions.forEach((question) => {
  if (checks.indexOf(question["id"]) !== -1) {
    const link = `<a href="detail.html?qid=${question.id}" class="link is-check">${question.title}</a>`;
    list.insertAdjacentHTML("beforeend", link);
  }
});

if (checks.length) {
  checkDelete.style.display = "block";
} else {
  checkNone.style.display = "block";
}

checkDelete.addEventListener("click", (e) => {
  const result = window.confirm("本当に外しますか？");
  if (result) {
    localStorage.clear();
    location.reload();
  }
});
