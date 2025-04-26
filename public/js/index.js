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
        //cute fx

        window.location.href = followUpPage;
    }

    detectMouse = (e) => {
        let offsetPaneX = 910;
        let offsetPaneY = 460;
        let offsetReceptionX = 875;
        let offsetReceptionY = 435;
        let paneModifier = 20;
        let receptionModifier = 12;

        welcomePane.style.left = e.x / paneModifier + offsetPaneX + "px";
        welcomePane.style.top = e.y / paneModifier + offsetPaneY + "px";

        welcomeReception.style.left = e.x / receptionModifier + offsetReceptionX + "px";
        welcomeReception.style.top = e.y / receptionModifier + offsetReceptionY + "px";

        welcomeBackground.style.objectPosition = (e.x / 80) + "% " + ((e.y / 350) + 70) + "% ";
        welcomeBackground.style.left = (-e.x / 375) + "%";
        welcomeBackground.style.top = (-e.y / 220) + "%";
    }

    welcomePane.addEventListener("click", gottaWorkFromHome);

    document.addEventListener("mousemove", detectMouse);
}