window.addEventListener("load", showScreen);

function showScreen() {
    console.log("showScreen");

    showScreen1();

}

const musicButton = document.querySelector("#music");
const music = document.querySelector("#playmusic");
const musicOnButton = musicButton.querySelector(".music_on_button");
const musicOffButton = musicButton.querySelector(".music_off_button");
let musicIsPlaying = false;
musicButton.addEventListener("click", function() {
  if (!musicIsPlaying) {
    music.play();
    musicIsPlaying = true;
    musicOnButton.style.display = "block";
    musicOffButton.style.display = "none";
  } else {
    music.pause();
    musicIsPlaying = false;
    musicOnButton.style.display = "none";
    musicOffButton.style.display = "block";
  }
});

function reloadThePage(){
    window.location.reload();
} 

function showScreen1() {
    console.log("showScreen1");

    document.querySelector("#screen_1").classList.add("show");
    document.querySelector("#screen_1").classList.remove("hide");

    document.querySelector("#txt_1").classList.add("pulse");

    document.querySelector("#next_1").addEventListener("click", hideScreen1);
}

function hideScreen1() {

    console.log("hideScreen1");

    document.querySelector("#screen_1").classList.add("fade_out");
    document.querySelector("#screen_1").classList.remove("show");
    document.querySelector("#screen_1").classList.add("hide");

    document.querySelector("#screen_1").addEventListener("animationend", showScreen2);
}

function showScreen2() {
    console.log("showScreen2");

    document.querySelector("#screen_2").classList.add("show");
    document.querySelector("#screen_2").classList.remove("hide");

    document.querySelector("#txt_2").classList.add("pulse");
    document.querySelector("#next_2").addEventListener("click", hideScreen2);
}
function hideScreen2() {

    console.log("hideScreen2");

    document.querySelector("#screen_2").classList.add("fade_out");
    document.querySelector("#screen_2").classList.remove("show");
    document.querySelector("#screen_2").classList.add("hide");

    document.querySelector("#screen_2").addEventListener("animationend", showScreen3);
}

function showScreen3() {
    console.log("showScreen3");

    document.querySelector("#screen_3").classList.add("show");
    document.querySelector("#screen_3").classList.remove("hide");

    document.querySelector("#txt_3").classList.add("pulse");
    document.querySelector("#next_3").addEventListener("click", hideScreen3);
}
function hideScreen3() {

    console.log("hideScreen3");

    document.querySelector("#screen_3").classList.add("fade_out");
    document.querySelector("#screen_3").classList.remove("show");
    document.querySelector("#screen_3").classList.add("hide");

    document.querySelector("#screen_3").addEventListener("animationend", showScreen4);
}
function showScreen4() {
    console.log("showScreen4");

    document.querySelector("#screen_4").classList.add("show");
    document.querySelector("#screen_4").classList.remove("hide");

    document.querySelector("#txt_4").classList.add("pulse");
    document.querySelector("#next_4").addEventListener("click", hideScreen4);
}
function hideScreen4() {

    console.log("hideScreen3");

    document.querySelector("#screen_4").classList.add("fade_out");
    document.querySelector("#screen_4").classList.remove("show");
    document.querySelector("#screen_4").classList.add("hide");

    document.querySelector("#screen_4").addEventListener("animationend", showScreen5);
}

function showScreen5() {
    console.log("showScreen5");

    document.querySelector("#screen_5").classList.add("show");
    document.querySelector("#screen_5").classList.remove("hide");

    document.querySelector("#txt_5").classList.add("pulse");
    document.querySelector("#next_5").addEventListener("click", hideScreen5);
}
function hideScreen5() {

    console.log("hideScreen5");

    document.querySelector("#screen_5").classList.add("fade_out");
    document.querySelector("#screen_5").classList.remove("show");
    document.querySelector("#screen_5").classList.add("hide");

    document.querySelector("#screen_5").addEventListener("animationend", showScreen6);
}
function showScreen6() {
    console.log("showScreen6");

    document.querySelector("#screen_6").classList.add("show");
    document.querySelector("#screen_6").classList.remove("hide");

    document.querySelector("#txt_6").classList.add("pulse");
    document.querySelector("#next_6").addEventListener("click", hideScreen6);
}
function hideScreen6() {

    console.log("hideScreen6");

    document.querySelector("#screen_6").classList.add("fade_out");
    document.querySelector("#screen_6").classList.remove("show");
    document.querySelector("#screen_6").classList.add("hide");

    document.querySelector("#screen_6").addEventListener("animationend", showScreen7);
}

function showScreen7() {
    console.log("showScreen7");

    document.querySelector("#screen_7").classList.add("show");
    document.querySelector("#screen_7").classList.remove("hide");

    document.querySelector("#txt_7").classList.add("pulse");
    document.querySelector("#next_7").addEventListener("click", hideScreen7);
}
function hideScreen7() {

    console.log("hideScreen7");

    document.querySelector("#screen_7").classList.add("fade_out");
    document.querySelector("#screen_7").classList.remove("show");
    document.querySelector("#screen_7").classList.add("hide");

    document.querySelector("#screen_7").addEventListener("animationend", showScreen8);
}

function showScreen8() {
    console.log("showScreen8");

    document.querySelector("#screen_8").classList.add("show");
    document.querySelector("#screen_8").classList.remove("hide");

    document.querySelector("#txt_8").classList.add("pulse");
    document.querySelector("#next_8").addEventListener("click", hideScreen8);
}
function hideScreen8() {

    console.log("hideScreen8");

    document.querySelector("#screen_8").classList.add("fade_out");
    document.querySelector("#screen_8").classList.remove("show");
    document.querySelector("#screen_8").classList.add("hide");

    document.querySelector("#screen_8").addEventListener("animationend", showScreen9);
}
function showScreen9() {
    console.log("showScreen9");

    document.querySelector("#screen_9").classList.add("show");
    document.querySelector("#screen_9").classList.remove("hide");

    document.querySelector("#txt_9").classList.add("pulse");
}