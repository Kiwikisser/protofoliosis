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
    const landscape = windowWidth > windowHeight;

    const qualityItemContainers = document.getElementsByClassName('project__info__item__square-container');
    const qualityItemSquares = document.getElementsByClassName('project__info__item__square');
    const qualityItemImages = document.getElementsByClassName('project__info__item__square__image');
    const qualityItemText = document.getElementsByClassName('project__info__item__text');

    for (let i = 0; i < qualityItemSquares.length; i++) {
        qualityItemSquares[i].addEventListener("click", function() {
            if (landscape){
                qualityItemText[i].classList.toggle('active');
                qualityItemContainers[i].classList.toggle('active');
            } else {
                qualityItemText[i].classList.toggle('active-vertical');
                qualityItemContainers[i].classList.toggle('active-vertical');
            }

            qualityItemSquares[i].classList.toggle('active');
            qualityItemImages[i].classList.toggle('active');

            if(qualityItemText[i].classList.contains('active') ||
               qualityItemText[i].classList.contains('active-vertical')){
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
    const productContent = document.getElementById('js--product-content');
    const productPortal = document.getElementById('js--product-portal');
    const productPortalImage = document.getElementById('js--product-portal-image');

    productContent.addEventListener("click", function() {
        productContent.classList.toggle('active');
        productPortal.classList.toggle('active');
        productPortalImage.classList.toggle('active');
    });
}