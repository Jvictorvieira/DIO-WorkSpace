const dino = document.querySelector(".dino");
const background = document.querySelector('.background');

let jumping = false;
let position = 0;


function handleKeyup(event) {
    if (event.keyCode === 32) {
        if (!jumping) {
            jump();
        }

    }
}

function jump() {

    jumping = true;

    let upInterval = setInterval(() => {

        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {

                position -= 20;
                dino.style.bottom = position + 'px';
                if (position <= 0) {
                    jumping = false;
                    clearInterval(downInterval);
                }

            }, 20);

        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }



    }, 20);
}

function geraSpike() {
    const spike = document.createElement('div');
    let spikePosition = 1000;
    let randomSpike = Math.random() * 6000;


    spike.classList.add('spike');
    spike.style.left = 1000 + 'px';
    background.appendChild(spike);

    let leftInerval = setInterval(() => {

        if (spikePosition < -60) {
            clearInterval(leftInerval);
            background.removeChild(spike);

        } else if (spikePosition > 0 && spikePosition < 60 && position < 60) {
            clearInterval(leftInerval);
            document.body.innerHTML = "<h1 class='over'> Fim de jogo</h1>";
        } else {
            spikePosition -= 10
            spike.style.left = spikePosition + 'px';
        }
    }, 20);

    setTimeout(geraSpike, randomSpike + 1000);
}

geraSpike();
document.addEventListener('keyup', handleKeyup);