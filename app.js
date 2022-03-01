const SUBMITBTN = $("#nameBtn")

// bruker getelement fordi jquery funker litt annerledes her
const NAMEINP = document.getElementById("nameInp")
const FORM = $("#nameForm")
const NAVNDISP =  $("#navnDisp")

let theirName
let randNumber
let minutesSince = Math.round(Date.now()/1000/60)
let minutesSinceCheck = minutesSince

generateLuckyNumber()

FORM.submit((e)=>{
    e.preventDefault()
    theirName = NAMEINP.value
    NAVNDISP.text("Velkommen "+theirName)
})

function generateLuckyNumber() {
    randNumber = Math.floor(Math.random()*10+1)
    $("#luckyNum").text(randNumber) 
}

setInterval(()=>{
    minutesSince = Math.floor(Date.now()/1000/60)
    if (minutesSince == minutesSinceCheck) {
        console.log("minuttet har ikke endret seg");
    } else {
        console.log("Minuttet har endret seg");
        minutesSinceCheck = minutesSince 
        generateLuckyNumber()
    }
    console.log("minutesSince "+minutesSince);
    console.log("minutesSinceCheck "+minutesSinceCheck);
},1000)
