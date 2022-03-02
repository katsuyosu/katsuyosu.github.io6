//パラメータ取得
const getParam = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

// 音声設定
const setSpeech = () => {
  return new Promise(function (resolve, reject) {
    let synth = window.speechSynthesis;
    let id;
    id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
};

let uttr = new SpeechSynthesisUtterance();
uttr.lang = "en-US";
uttr.pitch = 1;
uttr.rate = 1;
setSpeech().then((voices) => {
  uttr.voice = voices[33];
});

checks = [];
if (localStorage.getItem("check") !== null) {
  checks = localStorage
    .getItem("check")
    .split(",")
    .map((e) => {
      return Number(e);
    });
}
