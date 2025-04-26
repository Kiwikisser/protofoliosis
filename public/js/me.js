/**
 * @file me.js
 * @description JS file included in me.html.
 * @author Amos Peperkamp
 */
console.log("loaded me.js file");

const myPicture = document.getElementById('js--my-picture');
const experienceThumbs = document.getElementsByClassName('experience-item__figure');
const aframeLevel = document.getElementsByClassName('aframe')[0];
const arduinoLevel = document.getElementsByClassName('arduino')[0];
const figmaLevel = document.getElementsByClassName('figma')[0];
const html5Level = document.getElementsByClassName('html5')[0];
const javaLevel = document.getElementsByClassName('java')[0];
const javascriptLevel = document.getElementsByClassName('javascript')[0];
const laravelLevel = document.getElementsByClassName('laravel')[0];
const pythonLevel = document.getElementsByClassName('python')[0];
const sassLevel = document.getElementsByClassName('sass')[0];

// onclick
// change image
// spin container
let pictureIndex = 1;
let myClassesArray = ['yaboi1', 'yaboi2', 'yaboi3']
// let myPictureArray = ['../media/homeboy.jpg', '', ''];

changeMyPicture = () => {
    // myPicture.classList.add(myClassesArray[pictureIndex]);
    // myPicture.classList.remove(myClassesArray[pictureIndex-1]);
    switch (pictureIndex) {
        case 0:
            myPicture.classList.add(myClassesArray[pictureIndex]);
            myPicture.classList.remove(myClassesArray[2]);
            break;
        case 1:
            myPicture.classList.add(myClassesArray[pictureIndex]);
            myPicture.classList.remove(myClassesArray[0]);
            break;
        case 2:
            myPicture.classList.add(myClassesArray[pictureIndex]);
            myPicture.classList.remove(myClassesArray[1]);
            break;
        default:

    }
    pictureIndex++;
    if (pictureIndex > 2) {
        pictureIndex = 0;
    }
    console.log("hey");
}

myPicture.addEventListener("click", changeMyPicture);

for (var i = 0; i < experienceThumbs.length; i++) {
    experienceThumbs[i].addEventListener("click", (e) => {
        // console.log(e.target.parentElement.nodeName); //section
        // console.log(e.target); //figure
        // console.log(e.target.firstElementChild); //img
        e.target.classList.toggle("toggleOn");
        e.target.firstElementChild.classList.toggle("toggleOn");
        // console.log($(e.target).data("subject"));
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
// myPicture.addEventListener("mouseup", changeMyPicture);
