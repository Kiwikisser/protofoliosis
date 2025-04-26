/**
 * @file main.js
 * @description JS file included in all pages.
 * @author Amos Peperkamp
 */
console.log("loaded main.js file");

function loadScript(url) {
  let head = document.getElementsByTagName('head')[0];
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
}

window.onload = function () {
  loadScript('./js/index.js');
  loadScript('./js/work.js');
  loadScript('./js/me.js');

  const viewPortWidth = document.documentElement.clientWidth;
  const viewPortHeight = document.documentElement.clientHeight;
  // alert(viewPortWidth + ", " + viewPortHeight);

  console.log($(window).height());
  console.log($(window).width());
  // 1903 969

  // navigation menu
  if ($("body").data("page") !== "index") {
    const firstBar = document.getElementById("js--firstBar");
    const secondBar = document.getElementById("js--secondBar");
    const thirdBar = document.getElementById("js--thirdBar");
    const barContainer = document.getElementById("js--barContainer");
    const barContainerBg = document.getElementById("js--barContainerBg");
    const navbarList = document.getElementById('js--navbar-list');
    const navbarWork = document.getElementById('js--navbar-work');
    const navbarProfile = document.getElementById('js--navbar-profile');

    let menuBool = false;

    barContainer.onmousedown = function () {
      firstBar.classList.toggle("change");
      secondBar.classList.toggle("change");
      thirdBar.classList.toggle("change");
      let timeoutTime;

      if (menuBool === false) {
        timeoutTime = 100;
        menuBool = !menuBool;
        // console.log(menuBool);
      } else {
        timeoutTime = 40;
        menuBool = !menuBool;
        // console.log(menuBool);
      }

      barContainerBg.classList.toggle("change");

      navbarList.classList.toggle("roll");

      setTimeout(function () {
        navbarWork.classList.toggle("roll");
        setTimeout(function () {
          navbarProfile.classList.toggle("roll");
        }, timeoutTime);
      }, timeoutTime);
    }
  }
}
