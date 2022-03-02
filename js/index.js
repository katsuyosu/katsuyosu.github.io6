const list = document.querySelector("#list");
const check = document.querySelector("#score-num-check");
const all = document.querySelector("#score-num-all");

questions.forEach((question) => {
  if (checks.indexOf(question["id"]) !== -1) {
    const link = `<a href="detail.html?qid=${question.id}" class="link is-check">${question.title}</a>`;
    list.insertAdjacentHTML("beforeend", link);
  } else {
    const link = `<a href="detail.html?qid=${question.id}" class="link">${question.title}</a>`;
    list.insertAdjacentHTML("beforeend", link);
  }
});

all.innerHTML=questions.length
check.innerHTML=checks.length