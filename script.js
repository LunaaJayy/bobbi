const startKnop = document.querySelector(".start");
const pijlTnaarW = document.querySelector(".pijltje-rechts-tuin");
const pijlWnaarT = document.querySelector(".pijltje-links-woonkamer");
const pijlWnaarK = document.querySelector(".pijltje-rechts-woonkamer");
const pijlKnaarW = document.querySelector(".pijltje-links-keuken");

//winnen
const zakVoer = document.querySelector(".zakvoer")
const denkWolk = document.querySelector(".denkwolkje")
const denkTekst= document.querySelector(".denk-tekst")
const bobbiZij = document.querySelector(".bobbi-zij")
const bobbiZit = document.querySelector(".bobbi-zit")
const hartjeWin = document.querySelector(".win-hartje")
const bobbiLigDood = document.querySelector(".bobbi-ligdood")

//botjes
const botBoom = document.querySelector(".bot-boom");
const botBank = document.querySelector(".bot-bank");
const botKeuken = document.querySelector(".bot-keuken");
const botDeur = document.querySelector(".bot-deur");
const botVrouw = document.querySelector(".vrouw");

//progressbar
let percentage = 0
const nieuwProcent = percentage + "%" // moet een percentage zijn omdat hij anders niet in de width goed kan worden gezet
const hetLaden = document.querySelector(".progress-bar")

let introDiv = document.querySelector(".intro");
let tuinDiv = document.querySelector(".tuin");
let woonkamerDiv = document.querySelector(".woonkamer");
let keukenDiv = document.querySelector(".keuken");
let achtergrond = document.body;
let progressBar = document.querySelector(".progressie")

//geluid
const eten = new Audio('sounds/eten.mp3')
const juichen = new Audio('sounds/juichen.mp3')
const hey = new Audio('sounds/vrouw-hey.mp3')
//audio leren afspelen via gomakethings.com


// JAVASCRIPT OM NAAR VERSCHILLENDE KAMERS TE GAAN
// starten van spel -> tuin wordt laten zien
function startSpel () {
    introDiv.classList.add("hidden");
    tuinDiv.classList.remove("hidden");
    progressBar.classList.remove("hidden");
    achtergrond.style.backgroundImage = "url('fotos-en-bron/kamer-fotos/tuin.png')"; //ken ik dankzij https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
}

// van tuin naar woonkamer
function tuinNaarW () {
    tuinDiv.classList.add("hidden");
    woonkamerDiv.classList.remove("hidden");
    achtergrond.style.backgroundImage = "url('fotos-en-bron/kamer-fotos/woonkamer.png')";
    setTimeout(hint, 10000);
}

//hint
function hint () {
    if (!botVrouw.classList.contains("hidden")) {
        // via https://www.tutorialrepublic.com/faq/how-to-check-if-an-element-contains-a-class-in-javascript
        hey.play()
    }
}

// van woonkamer naar tuin
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

// van keuken naar woonkamer

function keukenNaarW () {
    keukenDiv.classList.add("hidden");
    woonkamerDiv.classList.remove("hidden");
    achtergrond.style.backgroundImage = "url('fotos-en-bron/kamer-fotos/woonkamer.png')";
    setTimeout(hint, 10000);
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
    eten.play();
    progresStart ();
}

function pakBotBank () {
    botBank.classList.add("hidden");
    eten.play();
    progresStart ();
}

function pakBotKeuken () {
    botKeuken.classList.add("hidden");
    eten.play();
    progresStart ();
}

function pakBotDeur () {
    botDeur.classList.add("hidden");
    eten.play();
    progresStart ();
}

function pakBotVrouw () {
    botVrouw.classList.add("hidden");
    eten.play();
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

//HOE TE WINNEN

function wolkjeWeg () {
    denkWolk.classList.add("hidden")
    denkTekst.classList.add("hidden")
    bobbiLigDood.classList.add("hidden")
    bobbiZij.classList.remove("hidden")
}

function nogNiet () {
    denkWolk.classList.remove("hidden")
    denkTekst.classList.remove("hidden")
    bobbiLigDood.classList.remove("hidden")
    bobbiZij.classList.add("hidden")
    setTimeout(wolkjeWeg, 3000 )
}

function gewonnen () {
    bobbiZij.classList.add("hidden")
    bobbiZit.classList.remove("hidden")
    hartjeWin.classList.remove("hidden")
    juichen.play()
}

zakVoer.addEventListener('click', winnen)

function winnen () {
    if (percentage == 100) {
        gewonnen()
    }
    else {
        nogNiet()
    }
}