/**
 * @file main.js
 * @description JS file included in all pages.
 * @author Amos Peperkamp
 */

const infoLogging = true;
infoLog("loaded main.js file");

window.onload = function () {
    loadPageScripts();

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
            } else {
                timeoutTime = 40;
                menuBool = !menuBool;
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

function infoLog(message) {
    if (!infoLogging)
        return;
    console.log("INFO: " + message);
}

function loadPageScripts(){
    switch ($("body").data("page")) {
        case "index":
            loadScript('./js/index.js');
            break;
        case "work":
            loadScript('./js/work.js');
            break;
        case "me":
            loadScript('./js/me.js');
            break;
        default:
            infoLog("no page found");
    }
}

function loadScript(url) {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

function logViewportDimensions(){
    const viewPortWidth = document.documentElement.clientWidth;
    const viewPortHeight = document.documentElement.clientHeight;
    infoLog("Viewport width: " + viewPortWidth + "px");
    infoLog("Viewport height: " + viewPortHeight + "px");
}