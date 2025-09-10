/**
 * @file me.js
 * @description JS file included in me.html.
 * @author Amos Peperkamp
 */
logInfo("loaded me.js file");

if (true) { // this causes unused variables to be highlighted
    pictureInteraction();
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