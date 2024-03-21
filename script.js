const startKnop = document.querySelector(".start");
const pijlTnaarW = document.querySelector(".pijltje-rechts-tuin");
const pijlWnaarT = document.querySelector(".pijltje-links-woonkamer");
const pijlWnaarK = document.querySelector(".pijltje-rechts-woonkamer");
const pijlKnaarW = document.querySelector(".pijltje-links-keuken");

//botjes
const botBoom = document.querySelector(".bot-boom");
const botBank = document.querySelector(".bot-bank");
const botKeuken = document.querySelector(".bot-keuken");
const botDeur = document.querySelector(".bot-deur");
const botVrouw = document.querySelector(".vrouw");

let percentage = 0
const nieuwProcent = percentage + "%" // moet een percentage zijn omdat hij anders niet in de width goed kan worden gezet
const hetLaden = document.querySelector(".progress-bar")

let introDiv = document.querySelector(".intro");
let tuinDiv = document.querySelector(".tuin");
let woonkamerDiv = document.querySelector(".woonkamer");
let keukenDiv = document.querySelector(".keuken");
let achtergrond = document.body;
let progressBar = document.querySelector(".progressie")

// JAVASCRIPT OM NAAR VERSCHILLENDE KAMERS TE GAAN
// starten van spel -> tuin wordt laten zien
function startSpel () {
    introDiv.classList.add("hidden");
    tuinDiv.classList.remove("hidden");
    progressBar.classList.remove("hidden");
    achtergrond.style.backgroundImage = "url('fotos-en-bron/kamer-fotos/tuin.png')"; //ken ik dankzij https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
}

// van tuin achtergrond naar woonkamer
function tuinNaarW () {
    tuinDiv.classList.add("hidden");
    woonkamerDiv.classList.remove("hidden");
    achtergrond.style.backgroundImage = "url('fotos-en-bron/kamer-fotos/woonkamer.png')";
}

// van woonkamer terug naar tuin
function woonNaarT () {
    woonkamerDiv.classList.add("hidden");
    tuinDiv.classList.remove("hidden");
    achtergrond.style.backgroundImage = "url('fotos-en-bron/kamer-fotos/tuin.png')";
}

// van woonkamer naar keuken
function woonNaarK () {
    woonkamerDiv.classList.add("hidden");
    keukenDiv.classList.remove("hidden");
    achtergrond.style.backgroundImage = "url('fotos-en-bron/kamer-fotos/keuken.png')";
}

// van keuken terug naar woonkamer
function keukenNaarW () {
    keukenDiv.classList.add("hidden");
    woonkamerDiv.classList.remove("hidden");
    achtergrond.style.backgroundImage = "url('fotos-en-bron/kamer-fotos/woonkamer.png')";
}

startKnop.addEventListener('click', startSpel)
pijlTnaarW.addEventListener('click', tuinNaarW)
pijlWnaarT.addEventListener('click', woonNaarT)
pijlWnaarK.addEventListener('click', woonNaarK)
pijlKnaarW.addEventListener('click', keukenNaarW)


// JAVASCRIPT OM DE BOTJES OP TE PAKKEN
// ze moesten allemaal apart worden gedaan omdat de css van elk botje anders is

function pakBotBoom () {
    botBoom.classList.add("hidden");
    progresStart ();
}

function pakBotBank () {
    botBank.classList.add("hidden");
    progresStart ();
}

function pakBotKeuken () {
    botKeuken.classList.add("hidden");
    progresStart ();
}

function pakBotDeur () {
    botDeur.classList.add("hidden");
    progresStart ();
}

function pakBotVrouw () {
    botVrouw.classList.add("hidden");
    progresStart ();
}

botBoom.addEventListener('click', pakBotBoom)
botBank.addEventListener('click', pakBotBank)
botKeuken.addEventListener('click', pakBotKeuken)
botDeur.addEventListener('click', pakBotDeur)
botVrouw.addEventListener('click', pakBotVrouw)

//PROGRESS BAR - mede dankzij een youtube video (zie bronnen) en chatGPT voor wat uitleg

function progresStart () {
    percentage += 20
    console.log(percentage)
    const nieuwProcent = percentage + "%" // moet een percentage zijn omdat hij anders niet in de width goed kan worden gezet, ook moet hij in de functie staan zodat hij wordt geüpdate
    hetLaden.style.width = nieuwProcent
}

