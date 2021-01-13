window.onload = function(){
  // console.log(window.location.pathname);
  const viewPortWidth = document.documentElement.clientWidth;
  const viewPortHeight = document.documentElement.clientHeight;
  // alert(viewPortWidth + ", " + viewPortHeight);

  console.log($(window).height());
  console.log($(window).width());
  // 1903 969

  if($("body").data("page") !== "index"){
    const firstBar = document.getElementById("js--firstBar");
    const secondBar = document.getElementById("js--secondBar");
    const thirdBar = document.getElementById("js--thirdBar");
    const barContainer = document.getElementById("js--barContainer");
    const barContainerBg = document.getElementById("js--barContainerBg");
    const navbarList = document.getElementById('js--navbar-list');
    const navbarWork = document.getElementById('js--navbar-work');
    const navbarProfile = document.getElementById('js--navbar-profile');

    let menuBool = false;

    barContainer.onmousedown = function (){
      firstBar.classList.toggle("change");
      secondBar.classList.toggle("change");
      thirdBar.classList.toggle("change");
      let timeoutTime;

      if (menuBool === false) {
        timeoutTime = 100;
        menuBool = !menuBool;
        // console.log(menuBool);
      } else {
        timeoutTime = 40;
        menuBool = !menuBool;
        // console.log(menuBool);
      }

      barContainerBg.classList.toggle("change");

      navbarList.classList.toggle("roll");

      setTimeout(function(){
        navbarWork.classList.toggle("roll");
        setTimeout(function(){
          navbarProfile.classList.toggle("roll");
        }, timeoutTime);
      }, timeoutTime);
    }
  }

  if($("body").data("page") === "index"){
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

      welcomePane.style.left = e.x/paneModifier + offsetPaneX + "px";
      welcomePane.style.top = e.y/paneModifier + offsetPaneY + "px";

      welcomeReception.style.left = e.x/receptionModifier + offsetReceptionX + "px";
      welcomeReception.style.top = e.y/receptionModifier + offsetReceptionY + "px";

      welcomeBackground.style.objectPosition = (e.x/80) + "% " +  ((e.y/350)+70) + "% ";
      welcomeBackground.style.left = (-e.x/375) + "%";
      welcomeBackground.style.top = (-e.y/220) + "%";
    }

    welcomePane.addEventListener("click", gottaWorkFromHome);

    document.addEventListener("mousemove", detectMouse);

  }else if ($("body").data("page") === "work"){
    const firstBar = document.getElementById("js--firstBar");
    const secondBar = document.getElementById("js--secondBar");
    const thirdBar = document.getElementById("js--thirdBar");
    const barContainer = document.getElementById("js--barContainer");
    const barContainerBg = document.getElementById("js--barContainerBg");
    const navbarList = document.getElementById('js--navbar-list');
    const navbarWork = document.getElementById('js--navbar-work');
    const navbarProfile = document.getElementById('js--navbar-profile');

    const workIpmedt2Clickbait = document.getElementsByClassName('cb1')[0];
    const workIipmedtClickbait = document.getElementsByClassName('cb2')[0];
    const workIpmedt3Clickbait = document.getElementsByClassName('cb3')[0];
    const workIpmedt5Clickbait = document.getElementsByClassName('cb4')[0];

    const workIpmedt2Thumb = document.getElementById('js--ipmedt2');
    const suiniflow = 'https://suiniflow.firebaseapp.com/';

    const workIipmedtThumb = document.getElementById('js--iipmedt');
    const museumArcade = 'https://kiwikisser.github.io';

    const workIpmedt3Thumb = document.getElementById('js--ipmedt3');
    const labVR = 'https://youtu.be/yuHJ6S7axkc';

    const workFigmaThumb = document.getElementById('js--ipmedt5');
    const portfolioFigma = 'https://www.figma.com/proto/xc7dbX4OiMpkPmWNku2xCq/de_laatste_meloen?node-id=1%3A2&viewport=-201%2C205%2C0.7313714027404785&scaling=scale-down';

    const workThumb = document.getElementsByClassName('work__pair-thumb');

    workIpmedt2Thumb.onmousedown = () => {
      window.location.href = suiniflow;
    }

    workIipmedtThumb.onmousedown = () => {
      window.location.href = museumArcade;
    }

    workIpmedt3Thumb.onmousedown = () => {
      window.location.href = labVR;
    }

    workFigmaThumb.onmousedown = () => {
      window.location.href = portfolioFigma;
    }

    displayClickbait = (elem) => {
      // console.log(elem.classList[1]);
      workProjectHovered = elem.classList[1];
      switch (workProjectHovered) {
        case 'ipmedt2':
          workIpmedt2Clickbait.classList.toggle("show");
          break;
        case 'iipmedt':
          workIipmedtClickbait.classList.toggle("show");
          break;
        case 'ipmedt3':
          workIpmedt3Clickbait.classList.toggle("show");
          break;
        case 'ipmedt5':
          workIpmedt5Clickbait.classList.toggle("show");
          break;
        default:

      }
    }

    for (let i = 0; i < workThumb.length; i++) {
      workThumb[i].onmouseover = () => {
        workThumb[i].parentElement.style.zIndex = 10;
        displayClickbait(workThumb[i]);
        // workThumb[i].classList.toggle("change");
      }
    }

    for (let i = 0; i < workThumb.length; i++) {
      workThumb[i].onmouseout = () => {
        workThumb[i].parentElement.style.zIndex = 3;
        displayClickbait(workThumb[i]);
        // workThumb[i].classList.toggle("change");
      }
    }


  }else if ($("body").data("page") === "me"){
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
      if (pictureIndex>2) {
        pictureIndex = 0;
      }
      console.log("hey");
    }

    myPicture.addEventListener("click", changeMyPicture);

    for (var i = 0; i < experienceThumbs.length; i++) {
      experienceThumbs[i].addEventListener("click", (e) =>{
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
  }

}
