var radio = document.getElementsByName("colorTheme");

for (var i = 0; i < radio.length; i++) {
  radio[i].onchange = testRadio;
}
function testRadio() {
  /*console.log(this.value);*/
  let rad = this.value;
  if (rad === "dark") {
    document.querySelector(".root").classList.remove("root_theme_light");
    document.querySelector(".root").classList.add("root_theme_dark");
    document.getElementById('toggle-pic').src = './images/header-logo.svg'
  }
  if (rad === "light") {
    document.querySelector(".root").classList.remove("root_theme_dark");
    document.querySelector(".root").classList.add("root_theme_light");
    document.getElementById('toggle-pic').src = './images/header-logo_dark.svg'
  }
}
