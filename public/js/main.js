/**
 * @file main.js
 * @description JS file included in all pages.
 * @author Amos Peperkamp
 */

const infoLogging = true;
logInfo("loaded main.js file");

const windowHeight = $(window).height();
const windowWidth = $(window).width();

window.onload = function () {
    loadPageScripts();

    console.log($(window).height());
    console.log($(window).width());

    if ($("body").data("page") !== "index") {
        directNavigationMenu();
    }
}

function directNavigationMenu(){
    const firstBar = document.getElementById("js--firstBar");
    const secondBar = document.getElementById("js--secondBar");
    const thirdBar = document.getElementById("js--thirdBar");
    const barContainer = document.getElementById("js--barContainer");
    const barContainerBg = document.getElementById("js--barContainerBg");
    const navbarList = document.getElementById('js--navbar-list');
    
    const navbarWork = document.getElementById('js--navbar-work');
    const navbarProfile = document.getElementById('js--navbar-profile');
    const navbarExperience = document.getElementById('js--navbar-experience');

    let menuOpen = false;

    barContainer.onmousedown = function () {
        firstBar.classList.toggle("change");
        secondBar.classList.toggle("change");
        thirdBar.classList.toggle("change");

        barContainerBg.classList.toggle("change");

        navbarList.classList.toggle("menu-roll");

        if (menuOpen){
            navbarWork.classList.toggle("menu-roll");
            navbarProfile.classList.toggle("menu-roll");
            navbarExperience.classList.toggle("menu-roll");
        } else {
            setTimeout(function () {
                navbarWork.classList.toggle("menu-roll");
                setTimeout(function () {
                    navbarProfile.classList.toggle("menu-roll");
                    setTimeout(function () {
                        navbarExperience.classList.toggle("menu-roll");
                    }, 100);
                }, 100);
            }, 100);
        }
        menuOpen = !menuOpen;
    }
}

function logInfo(message) {
    if (!infoLogging)
        return;
    console.log(message);
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
        case "experience":
            loadScript('./js/experience.js');
            break;
        case "project":
            loadScript('./js/experience.js');
            loadScript('./js/project.js');
            break;
        default:
            logInfo("no page found");
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
    logInfo("Viewport width: " + viewPortWidth + "px");
    logInfo("Viewport height: " + viewPortHeight + "px");
}