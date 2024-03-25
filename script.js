/*Mijn code is tot stand gekomen van het verwerken van het lesmateriaal met daarbij zonodige hulp van vrienden en ChatGPT. Code wat niet in het lesmateriaal voor komt heb ik onderzocht,
zodat ik deze begrijp en in de toekomst kan toepassen.*/

const emojis = ["🎀","🎀","🐷","🐷","🌷","🌷","☁️","☁️","🍥","🍥","🩷","🩷","🩰","🩰","🍧","🍧"];
let shuffle_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffle_emojis[i];
    /*Met deze code kunnen de emoji's worden aangepast in CSS,doormiddel van de class 'item'*/

    box.addEventListener('click', function(){
        this.classList.add('boxOpen'); /*this.classList voegt een CSS-klasse aan 'boxOpen' wanneer de 'click' plaatsvindt. bron: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList*/
        setTimeout(function() {
            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch'); /*Er wordt gecontroleerd of de twee 'boxOpen' overeenkomen. Zo ja = 'boxMatch' en draaien deze niet meer terug*/

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen'); /*Verwijderd de CSS-klasse gekoppeld aan 'boxOpen' van de geselecteerde elementen wanneer deze niet overeenkomen*/

                    if (document.querySelectorAll('.boxMatch').length == emojis.length){
                        const audio = new Audio('happysoundeffect.mp3'); /*bron: https://gomakethings.com/how-to-play-a-sound-with-javascript/*/
                        audio.play(); /*speelt af wanneer er op de melding wordt gedrukt*/
                        alert('Congrats you won the game! :)'); /*Wanneer het aantal 'boxMatch' overeenkomt met de 'emojis' krijgt de speler een melding dat de game gewonnen is*/
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen'); /*Verwijderd de CSS-klasse gekoppeld aan 'boxOpen' van de geselecteerde elementen wanneer deze niet overeenkomen*/
                }
            }
        },1000)
    });

    const resetButton = document.querySelector('.reset');
        resetButton.addEventListener('click', function() {
            window.location.reload();
        }) /*De pagina wordt herladen wanneer er op de 'reset' knop wordt gedrukt*/

    document.querySelector('.memory').appendChild(box);
}