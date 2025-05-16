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

    changeMyPicture = () => {
        switch (pictureIndex) {
            case 0:
                myPicture.classList.add(myClassesArray[pictureIndex]);
                myPicture.classList.remove(myClassesArray[2]);
                console.log("hey");
                break;
            case 1:
                myPicture.classList.add(myClassesArray[pictureIndex]);
                myPicture.classList.remove(myClassesArray[0]);
                console.log("hi");
                break;
            case 2:
                myPicture.classList.add(myClassesArray[pictureIndex]);
                myPicture.classList.remove(myClassesArray[1]);
                console.log("hello");
                break;
            default:

        }
        pictureIndex++;
        if (pictureIndex > 2) {
            pictureIndex = 0;
        }
    }

    myPicture.addEventListener("click", changeMyPicture);
}

function qualitiesInteraction(){
    const qualityItemSquares = document.getElementsByClassName('me__qualities__item__square');
    const qualityItemText = document.getElementsByClassName('me__qualities__item__text');
    let activeBool = false;

    for (let i = 0; i < qualityItemSquares.length; i++) {
        qualityItemSquares[i].addEventListener("click", function() {
            qualityItemText[i].classList.toggle('active');

            if(!activeBool){
                setTimeout( () => {
                    qualityItemText[i].style.opacity = "100";
                }, 300);
            } else {
                qualityItemText[i].style.opacity = "0";
            }
            activeBool = !activeBool;
        });
    }
}