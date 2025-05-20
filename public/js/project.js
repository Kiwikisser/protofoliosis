/**
 * @file project.js
 * @description JS file included in project.html.
 * @author Amos Peperkamp
 */
logInfo("loaded project.js file");

if (true) { // this causes unused variables to be highlighted
    informationInteraction();
}

function informationInteraction(){
    const qualityItemContainers = document.getElementsByClassName('project__info__item__square-container');
    const qualityItemSquares = document.getElementsByClassName('project__info__item__square');
    const qualityItemText = document.getElementsByClassName('project__info__item__text');

    for (let i = 0; i < qualityItemSquares.length; i++) {
        qualityItemSquares[i].addEventListener("click", function() {
            qualityItemText[i].classList.toggle('active');
            qualityItemSquares[i].classList.toggle('active');
            qualityItemContainers[i].classList.toggle('active');

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