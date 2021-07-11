
const sword = document.querySelector('#choice-a');
const uiLayer = document.querySelector('.ui-layer')
function swordClicked() {
    let crown = document.createElement('img');
    crown.src = 'images/win.png';
    console.log("crowned");
    return uiLayer.appendChild(crown);
    };

sword.addEventListener('click', swordClicked);