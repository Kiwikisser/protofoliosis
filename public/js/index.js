/**
 * @file index.js
 * @description JS file included in index.html. 
 * @author Amos Peperkamp
 */
logInfo("loaded index.js file");

if (true) { // this causes unused variables to be highlighted
    const welcomePane = document.getElementById('js--welcome-pane');
    const welcomeReception = document.getElementById('js--welcome-reception');
    const welcomeBackground = document.getElementById('js--welcome-background');
    let followUpPage = "experience.html"

    testFunction = (e) => {
        console.log(e);
    }

    gottaWorkFromHome = () => {
        welcomePane.classList.toggle("welcome__zoom");
        setTimeout(function () {
            window.location.href = followUpPage;
        }, 400);
    }

    logInfo("windowWidth: " + windowWidth / 2);
    logInfo("windowHeight: " + windowHeight / 2);
    logInfo("bg pos: " + welcomeBackground.style.objectPosition);

    detectMouse = (e) => {
        let offsetX = windowWidth / 2;
        let offsetY = windowHeight / 2;

        let modifierPane = 0.05;
        let modifierText = 0.07;
        let modifierBackgroundY = 600;
        let modifierBackgroundX = 800;

        welcomePane.style.left = offsetX + (e.x - offsetX) * modifierPane + "px";
        welcomePane.style.top = offsetY + (e.y - offsetY) * modifierPane + "px";

        welcomeReception.style.left = offsetX + (e.x - offsetX) * modifierText + "px";
        welcomeReception.style.top = offsetY + (e.y - offsetY) * modifierText + "px";

        welcomeBackground.style.top = (-e.y / modifierBackgroundY - 1) + "%";
        welcomeBackground.style.left = (-e.x / modifierBackgroundX - 5) + "%";
    }

    welcomePane.addEventListener("click", gottaWorkFromHome);

    document.addEventListener("mousemove", detectMouse);
}