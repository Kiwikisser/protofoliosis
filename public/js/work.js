/**
 * @file work.js
 * @description JS file included in work.html.
 * @author Amos Peperkamp
 */
logInfo("loaded work.js file");

if (true) { // this causes unused variables to be highlighted
    let workProjectHovered = document.getElementsByClassName('work__pair-thumb')[0];

    const workIpmedt2Clickbait = document.getElementsByClassName('cb1')[0];
    const workIipmedtClickbait = document.getElementsByClassName('cb2')[0];
    const workIpmedt3Clickbait = document.getElementsByClassName('cb3')[0];
    const workIROBClickbait = document.getElementsByClassName('cb4')[0];

    const workIpmedt2Thumb = document.getElementById('js--ipmedt2');
    const suiniflow = './interactive-storytelling.html';

    const workIipmedtThumb = document.getElementById('js--iipmedt');
    const museumArcade = 'https://kiwikisser.github.io';

    const workIpmedt3Thumb = document.getElementById('js--ipmedt3');
    const labVR = 'https://youtu.be/yuHJ6S7axkc';

    const workIROBThumb = document.getElementById('js--iClock_Air');
    const iClockAir = 'https://youtu.be/VUBuVYAL3r4';

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

    workIROBThumb.onmousedown = () => {
        window.location.href = iClockAir;
    }

    displayClickbait = (elem) => {
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
            case 'iclock_air':
                workIROBClickbait.classList.toggle("show");
                break;
            default:

        }
    }

    for (let i = 0; i < workThumb.length; i++) {
        workThumb[i].onmouseover = () => {
            workThumb[i].parentElement.style.zIndex = 10;
            displayClickbait(workThumb[i]);
        }
    }

    for (let i = 0; i < workThumb.length; i++) {
        workThumb[i].onmouseout = () => {
            workThumb[i].parentElement.style.zIndex = 3;
            displayClickbait(workThumb[i]);
        }
    }
}