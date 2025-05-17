/**
 * @file me.js
 * @description JS file included in me.html.
 * @author Amos Peperkamp
 */
logInfo("loaded me.js file");

if (true) { // this causes unused variables to be highlighted
    pictureInteraction();
    qualitiesInteraction();
}

function pictureInteraction(){
    const myPicture = document.getElementById('js--my-picture');

    let pictureIndex = 1;
    let myClassesArray = ['yaboi1', 'yaboi2', 'yaboi3']
    let classToRemoveNextTime;
    let previousClass;

    changeMyPicture = () => {
        myPicture.classList.add(myClassesArray[pictureIndex % 3]);
        classToRemoveNextTime = myClassesArray[pictureIndex % 3];
        myPicture.classList.remove(previousClass);
        previousClass = classToRemoveNextTime;

        pictureIndex++;
    }

    myPicture.addEventListener("click", changeMyPicture);
}

function qualitiesInteraction(){
    const qualityItemSquares = document.getElementsByClassName('me__qualities__item__square');
    const qualityItemText = document.getElementsByClassName('me__qualities__item__text');

    for (let i = 0; i < qualityItemSquares.length; i++) {
        qualityItemSquares[i].addEventListener("click", function() {
            qualityItemText[i].classList.toggle('active');
            qualityItemSquares[i].classList.toggle('active');

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