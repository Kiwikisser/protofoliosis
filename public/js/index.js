/**
 * @file index.js
 * @description JS file included in index.html. 
 * @author Amos Peperkamp
 */
infoLog("loaded index.js file");

if (true) { // this causes unused variables to be highlighted
    const welcomePane = document.getElementById('js--welcome-pane');
    const welcomeReception = document.getElementById('js--welcome-reception');
    const welcomeBackground = document.getElementById('js--welcome-background');
    let followUpPage = "work.html"

    console.log(welcomeBackground.style.objectPosition);

    testFunction = (e) => {
        console.log(e);
    }

    gottaWorkFromHome = () => {
        welcomePane.classList.toggle("welcome__zoom");
        setTimeout(function () {
            window.location.href = followUpPage;
        }, 200);
    }

    infoLog("windowWidth: " + windowWidth / 2);
    infoLog("windowHeight: " + windowHeight / 2);

    detectMouse = (e) => {
        let offsetX = windowWidth / 2;
        let offsetY = windowHeight / 2;

        let modifier = 0.05;
        let modifierText = 0.07;

        welcomePane.style.left = offsetX + (e.x - offsetX) * modifier + "px";
        welcomePane.style.top = offsetY + (e.y - offsetY) * modifier + "px";

        welcomeReception.style.left = offsetX + (e.x - offsetX) * modifierText + "px";
        welcomeReception.style.top = offsetY + (e.y - offsetY) * modifierText + "px";
    }

    welcomePane.addEventListener("click", gottaWorkFromHome);

    document.addEventListener("mousemove", detectMouse);
}