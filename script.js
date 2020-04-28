window.addEventListener("load", showScreen);

function showScreen() {
    console.log("showScreen");

    showScreen1();

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