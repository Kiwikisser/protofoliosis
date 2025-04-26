/**
 * @file me.js
 * @description JS file included in me.html.
 * @author Amos Peperkamp
 */
infoLog("loaded me.js file");

if (true) { // this causes unused variables to be highlighted
    const myPicture = document.getElementById('js--my-picture');
    const experienceThumbs = document.getElementsByClassName('experience-item__figure');

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

    for (var i = 0; i < experienceThumbs.length; i++) {
        experienceThumbs[i].addEventListener("click", (e) => {
            e.target.classList.toggle("toggleOn");
            e.target.firstElementChild.classList.toggle("toggleOn");
            let subject = $(e.target.firstElementChild).data("subject");
            switch (subject) {
                case "aframe":
                    document.getElementsByClassName(subject)[0].classList.toggle("toggleOn");
                    break;
                case "arduino":
                    document.getElementsByClassName(subject)[0].classList.toggle("toggleOn");
                    break;
                case "figma":
                    document.getElementsByClassName(subject)[0].classList.toggle("toggleOn");
                    break;
                case "html5":
                    document.getElementsByClassName(subject)[0].classList.toggle("toggleOn");
                    break;
                case "java":
                    document.getElementsByClassName(subject)[0].classList.toggle("toggleOn");
                    break;
                case "javascript":
                    document.getElementsByClassName(subject)[0].classList.toggle("toggleOn");
                    break;
                case "laravel":
                    document.getElementsByClassName(subject)[0].classList.toggle("toggleOn");
                    break;
                case "python":
                    document.getElementsByClassName(subject)[0].classList.toggle("toggleOn");
                    break;
                case "sass":
                    document.getElementsByClassName(subject)[0].classList.toggle("toggleOn");
                    break;
                default:

            }

        });
    }
}