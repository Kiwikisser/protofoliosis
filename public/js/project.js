/**
 * @file project.js
 * @description JS file included in project.html.
 * @author Amos Peperkamp
 */
logInfo("loaded project.js file");

if (true) { // this causes unused variables to be highlighted
    informationInteraction();
    projectPortal();
}

function informationInteraction(){
    const qualityItemContainers = document.getElementsByClassName('project__info__item__square-container');
    const qualityItemSquares = document.getElementsByClassName('project__info__item__square');
    const qualityItemImages = document.getElementsByClassName('project__info__item__square__image');
    const qualityItemText = document.getElementsByClassName('project__info__item__text');

    for (let i = 0; i < qualityItemSquares.length; i++) {
        qualityItemSquares[i].addEventListener("click", function() {
            qualityItemText[i].classList.toggle('active');
            qualityItemSquares[i].classList.toggle('active');
            qualityItemContainers[i].classList.toggle('active');
            qualityItemImages[i].classList.toggle('active');

            if(qualityItemText[i].classList.contains('active')){
                setTimeout( () => {
                    qualityItemText[i].style.opacity = "100";
                }, 200);
            } else {
                qualityItemText[i].style.opacity = "0";
            }
        });
    }
}

function projectPortal(){
    const projectContent = document.getElementById('js--project-content');
    const projectPortal = document.getElementById('js--project-portal');
    const projectPortalImage = document.getElementById('js--project-portal-image');

    projectContent.addEventListener("click", function() {
        /**
         * .1s 
            content rotate 0deg

            .1s-.2s 
            left arrow more left
            right arrow more right
            (just increase content width to twice the size?)
            Portal widens too 1.5 times

            .2s+
            Opacity thumbnail 100%
        */
    }
    
    
}