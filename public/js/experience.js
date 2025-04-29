/**
 * @file experience.js
 * @description JS file included in experience.html. 
 * @author Amos Peperkamp
 */
logInfo("loaded experience.js file");

if (true) {
    const experienceItems = document.getElementsByClassName('experience__row__item__square');

    for (let i = 0; i < experienceItems.length; i++) {
        const item = experienceItems[i];
        item.onclick = () => {
            item.classList.toggle("pulse");
            item.classList.toggle("open");
        }
    }
}