window.onload = function(){
  // console.log(window.location.pathname);

  if(window.location.pathname === '/public/'){
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
      let offsetReceptionX = 870;
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

  }else if (window.location.pathname === '/public/work.html'){
    let firstBar = document.getElementById("js--firstBar");
    let secondBar = document.getElementById("js--secondBar");
    let thirdBar = document.getElementById("js--thirdBar");
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
        console.log(menuBool);
      } else {
        timeoutTime = 40;
        menuBool = !menuBool;
        console.log(menuBool);
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

}
