// bruker getelement fordi jquery funker litt annerledes her
const NAMEINP = document.getElementById("nameInp")
const NUMERINP = document.getElementById("numberInp")

// men ellers bruker jeg jquery
const FORM = $("#nameForm")
const NAVNDISP = $("#navnDisp")


const FORM2 = $("#numberForm")




let theirName
let randNumber
let minutesSince = Math.round(Date.now() / 1000 / 60)
let minutesSinceCheck = minutesSince
let liAdd =""
let currentName
let guessedNumber

generateLuckyNumber()

// sjekker om et navn er lagret i session
if (sessionStorage.getItem("currentName")) {
    NAVNDISP.text("Velkommen " + sessionStorage.getItem("currentName"))
}

// gjør localstorage til en liste
for (var i = 0; i < localStorage.length; i++) {
    liAdd += `<li> ${localStorage.getItem(localStorage.key(i))} </li>`
    console.log(liAdd);
}
$("#list").html(liAdd)


FORM.submit(e => {
    e.preventDefault()
    theirName = NAMEINP.value
    NAMEINP.value = ""

    if (!theirName.length) {
        console.log("not valid");
    } else {
        NAVNDISP.text("Velkommen " + theirName)
        sessionStorage.setItem("currentName", theirName)

        if (sessionStorage.getItem("currentName")) {
            NAVNDISP.text("Velkommen " + sessionStorage.getItem("currentName"))
        }


        localStorage.setItem("name" + localStorage.length, theirName)
        liAdd += `<li>${theirName}</li>`
        $("#list").html(liAdd)
    }

})

FORM2.submit(e => {
    e.preventDefault()
    guessedNumber = NUMERINP.value
    console.log(NUMERINP.value);
    $("#guess").text("Du gjettet "+guessedNumber)
})

function generateLuckyNumber() {
    randNumber = Math.floor(Math.random() * 10 + 1)
    $("#luckyNum").text(randNumber)
    if (1==guessedNumber) {
        console.log("gjettet riktig");
    }
}

setInterval(() => {
    minutesSince = Math.floor(Date.now() / 1000 / 60)
    if (minutesSince == minutesSinceCheck) {

    } else {
        minutesSinceCheck = minutesSince
        generateLuckyNumber()
    }

}, 1000)
