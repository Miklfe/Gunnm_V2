//Ryan Queva//
/*https://codepen.io/RyanQueva*/

"use strict";

const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

const numberElement = [];
const barElement = [];

// Création des heures
for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));
// 

//  Creation de la bar des secondes
for (let i = 1; i <= 60; i++) {
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}
barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));
// 

// Creation de la fonction pour recuperer & set l'heure
function getCurrentTime() {
    let date = new Date();

    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}
// 

// Appel de getCurrentTime(); au chargement
getCurrentTime();

// Appel de getCurrentTime(); pour mettre les eguilles toute les secondes
setInterval(getCurrentTime, 1000); // 1000ms donc 1s

// On récupère l'élément <p> où la date sera affichée.
const dateElement = document.querySelector('.wrapper-date .date p');

// On définit la fonction pour mettre à jour la date.
function updateDate() {
    const now = new Date();

    // On utilise l'API Intl.DateTimeFormat pour formater la date.
    // C'est la méthode la plus fiable et la plus simple.
    const options = {
        weekday: 'long', // Pour afficher le jour de la semaine en toutes lettres (vendredi)
        day: 'numeric', // Pour le numéro du jour (1)
        month: 'long', // Pour le mois en toutes lettres (août)
        year: 'numeric' // Pour l'année (2025)
    };

    // 'fr-FR' indique le format pour la France.
    const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(now);

    // On insère la date formatée dans l'élément <p>.
    dateElement.textContent = formattedDate;
}

// On appelle la fonction une première fois pour afficher la date immédiatement.
updateDate();

// Si vous voulez que la date se mette à jour à minuit (pour le changement de jour),
// vous pouvez utiliser setInterval pour l'appeler une fois par minute ou par heure.
// Pour cet exemple, on le laisse en appel unique car la date ne change pas au cours de la journée.
// setInterval(updateDate, 60000); // Met à jour toutes les minutes si nécessaire.
