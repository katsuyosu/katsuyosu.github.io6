const qid = Number(getParam("qid"));
const ary = qid - 1;
const title = document.querySelector("#question-title");
const text = document.querySelector("#question-text");
const asnOpen = document.querySelector("#anser-open");
const voiceBtn = document.querySelector("#question-voice");
const check = document.querySelector("#check");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
check_flg = false;

if (questions[ary] === undefined) {
  location.href = "index.html";
}
if (qid <= 1) {
  prev.style.display = "none";
}
if (qid >= questions.length) {
  next.style.display = "none";
}
if (checks.indexOf(qid) !== -1) {
  check.classList.add("is-check");
  check_flg = true;
}
title.innerHTML = questions[ary].title;
text.innerHTML = questions[ary].text;

voiceBtn.addEventListener("click", (e) => {
  uttr.text = questions[ary].title;
  speechSynthesis.cancel(uttr);
  speechSynthesis.speak(uttr);
});
asnOpen.addEventListener("click", (e) => {
  text.classList.add("show");
  e.target.style.opacity = 0;
});
prev.addEventListener("click", (e) => {
  prev.setAttribute("href", `detail.html?qid=${qid - 1}`);
});
next.addEventListener("click", (e) => {
  next.setAttribute("href", `detail.html?qid=${qid + 1}`);
});
check.addEventListener("click", (e) => {
  if (check_flg) {
    checks.splice(checks.indexOf(qid), 1);
    e.target.classList.remove("is-check");
  } else {
    checks.push(qid);
    e.target.classList.add("is-check");
  }
  localStorage.setItem("check", checks);
  check_flg = !check_flg;
});
