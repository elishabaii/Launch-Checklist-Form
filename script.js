// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
  let pilotName = document.querySelector("input[name=pilotName]");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoWeight = document.querySelector("input[name=cargoWeight]");
  if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoWeight.value === "") {
   alert("All fields are required!");
    event.preventDefault();
      }
    });
  });


//-- I think alert if not a number or not a letter-->
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoWeight = document.querySelector("input[name=cargoWeight]");
  if (isNaN(fuelLevel.value) || isNaN(cargoWeight.value)) { 
  if (isNaN(fuelLevel.value) && isNaN(cargoWeight.value)) { 
  alert("Please enter numerical data for fuel level and cargo weight!");
  }
  else if (isNaN(fuelLevel.value)) { 
   alert("Please enter numerical data for fuel level!");
  }
   else if (isNaN(cargoWeight.value)) { 
  alert("Please enter numerical data for cargo weight!");
  event.preventDefault();
         } 
       }
    });
  });

  

  //-I think this will alert if not a letter-->
  window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) { 
      if (!isNaN(pilotName.value) && !isNaN(copilotName.value)) { 
         alert("Please enter alphabetic data for Pilot Name and Co-pilot Name!");
       }
      else if (!isNaN(pilotName.value)) { 
       alert("Please enter alphabetic data for Pilot Name!");
       }
      else if (!isNaN(cargoWeight.value)) { 
       alert("Please enter alphabetic data for Co-Pilot Name!");
        event.preventDefault();
       } 
      }
   });
 });

//update CSS
//document.getElementById("faultyItems").style.visibility = "visible";


  //--I think this will pull the user entered info into my functions --
 /*<p id="main-text">Lots of things to say</p>

      let p = document.getElementById("main-text");
      p.append("words");
      console.log(p.innerHTML);
*/
 //-I think this will use a template literal to update pilot and co pilot names from input -->
/*
const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
const result = document.querySelector('.result');
result.textContent = `You like ${event.target.value}`;
});
*/

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
