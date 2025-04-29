/**
 * @file experience.js
 * @description JS file included in experience.html. 
 * @author Amos Peperkamp
 */
logInfo("loaded experience.js file");

if (true) {
    const experienceItems = document.getElementsByClassName('experience__row__item__square');
    const experienceItemsToggle = document.getElementById('js--experience-squares-toggle');

    let isOpen = false;

    experienceItemsToggle.onclick = () => {
        for (let i = 1; i < experienceItems.length; i++) {
            if (isOpen) {
                experienceItems[i].classList.add("pulse");
                experienceItems[i].classList.remove("open");
            } else {
                experienceItems[i].classList.remove("pulse");
                experienceItems[i].classList.add("open");
            }
        }
        isOpen = !isOpen;
    }

    for (let i = 1; i < experienceItems.length; i++) {
        const item = experienceItems[i];
        item.onclick = () => {
            item.classList.toggle("pulse");
            item.classList.toggle("open");
        }
    }
}