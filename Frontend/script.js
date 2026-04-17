function selectCase(caseType){

localStorage.setItem("caseType",caseType)

alert("You selected: " + caseType)

window.location="chatbot.html"

}

function generatePetition(){

let name = document.getElementById("name").value;
let city = document.getElementById("city").value;
let caseType = document.getElementById("caseType").value;

fetch("http://localhost:5000/petition",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
city:city,
caseType:caseType
})

})

.then(res=>res.json())

.then(data=>{
document.getElementById("result").innerText = data.petition;
});

}