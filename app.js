const SUBMITBTN = $("#nameBtn")

// bruker getelement fordi jquery funker litt annerledes her
const NAMEINP = document.getElementById("nameInp")
const FORM = $("#nameForm")
const NAVNDISP = $("#navnDisp")

let theirName
let randNumber
let minutesSince = Math.round(Date.now() / 1000 / 60)
let minutesSinceCheck = minutesSince
let liAdd
let currentName

generateLuckyNumber()

// sjekker om et navn er lagret i session
if (sessionStorage.getItem("currentName")) {
    NAVNDISP.text("Velkommen " + sessionStorage.getItem("currentName"))
}

// gjør localstorage til en liste
for (var i = 0; i < localStorage.length; i++) {
    liAdd += ` <li> ${localStorage.getItem(localStorage.key(i))} </li>`
}
$("#list").html(liAdd)


FORM.submit((e) => {
    e.preventDefault()
    theirName = NAMEINP.value

    if (!theirName.length) {
        console.log("not valid");
    } else {
        NAVNDISP.text("Velkommen " + theirName)
        sessionStorage.setItem("currentName", theirName)

        if (sessionStorage.getItem("currentName")) {
            NAVNDISP.text("Velkommen " + sessionStorage.getItem("currentName"))
        }


        localStorage.setItem("name" + localStorage.length, theirName)
        liAdd += `
        <li>${theirName}</li>
        `
        $("#list").html(liAdd)
    }

})

function generateLuckyNumber() {
    randNumber = Math.floor(Math.random() * 10 + 1)
    $("#luckyNum").text(randNumber)
}

setInterval(() => {
    minutesSince = Math.floor(Date.now() / 1000 / 60)
    if (minutesSince == minutesSinceCheck) {} else {
        minutesSinceCheck = minutesSince
        generateLuckyNumber()
    }

}, 1000)


// LOCAL STORAGE



// SESSION STORAGE