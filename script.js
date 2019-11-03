// Write your JavaScript code here!

window.addEventListener("load", function () {

  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");



    //---alert if no entry
    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
   // if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" ) {
        alert("All fields are required!");

    }

    //--  alert if not a number
    if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
      alert("Please enter numerical data for both fuel level and cargo weight!");
    }           
    event.preventDefault();   
 


    //- this will alert if not a letter--
    if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
      ("Please enter alphabetic data for both Pilot Name and Co-pilot Name!");
    }
    else if (!isNaN(pilotName.value) && !isNaN(copilotName.value)) {
      alert("Please enter alphabetic data for Pilot Name and Co-pilot Name!");
    }
    else if (!isNaN(pilotName.value)) {
      alert("Please enter alphabetic data for Pilot Name!");
    }
    else if (!isNaN(copilotName.value)) {
      alert("Please enter alphabetic data for Co-Pilot Name!");
         }
    event.preventDefault();
  });

});
/*
    this.document.getElementById("formSubmit").onclick = function (){
      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      */
    //for cargo and fuel
    /*
    if (fuelLevel < 10000 || cargoMass > 10000) {
      document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("faultyItems").style.visability = "visable";
      document.getElementById('${pilotName}').innerHTML = "'${pilotName}' Ready For Launch";
      document.getElementById('${copilotName}').innerHTML = "'${copilotName}' Ready For Launch";
      document.getElementById("fuelStatus").innerHTML = "Not Ready For Launch";
      document.getElementById("cargoStatus").innerHTML = "Not Ready For Launch";
}    
 event.preventDefault();
});

    });
  


/*
let fuelLevelReady = false
let fuelLevelResponse = 'Check Fuel Level!'
let cargoMassReady = false
let cargoMassResponse = 'Check Cargo Mass!'
*/

/*//for cargo and fuel
 if (fuelLevelInput < 10000 || cargoMassInput > 10000) {
 document.getElementById("launchStatus").innerHTML ="Shuttle Not Ready For Launch";
document.getElementById("launchStatus").style.color = "red";
document.getElementById("faultyItems").style.visability = "visable";
 document.getElementById('${pilotName}').innerHTML= "'${pilotName}' Ready For Launch";
 document.getElementById('${copilotName}').innerHTML = "'${copilotName}' Ready For Launch";
 document.getElementById("feulLevelInput").innerHTML = "Not Ready For Launch";
document.getElementById("cargoMassInput").innerHTML = "Not Ready For Launch";
  event.preventDefault();
}
});
  
});
 */
/*
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {

    let launchStatus = document.getElementById("launchStatus").innerHTML =
    let faultyItems = document.getElementById("faultyItems").innerHTML =
    let pilotNameInput = document.getElementById('${pilotName}').innerHTML =
    let copilotNameInput = document.getElementById('${copilotName}').innerHTML =
    let feulLevelInput = document.getElementById("fuelLevelInput").innerHTML =
    let cargoMassInput = document.getElementById("cargoMassInput").innerHTML =



    }
  });
  */


//this should update CSS
//</ol>document.getElementById("faultyItems").style.visibility = "visible";


  //--I think this will pull the user entered info into my functions --
/*<p id="main-text">Lots of things to say</p>

     let p = document.getElementById("main-text");
     p.append("words");
     console.log(p.innerHTML);
*/
/*
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoWeight = document.querySelector("input[name=cargoWeight]");
*/
/*let pilotNameInput = document.getElementById("pilotName");
    let copilotNameInput = document.getElementById("copilotName");
    let fuelLevelInput = document.getElementById("fuelLevel");
    let cargoMassInput = document.getElementById("cargoMass");
*/


/*
    <div id="launchStatusCheck">
        <h2 id="launchStatus">Awaiting Information Before Launch</h2>
        <div id="faultyItems">
            <ol>
                <li id="pilotStatus">Pilot Ready</li>
                <li id="copilotStatus">Co-pilot Ready</li>
                <li id="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus">Cargo weight low enough for launch</li>
            </ol>
        </div>
    </div>

    */
/*

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

 */

//alert if fuel level too low, weight too high
/*
***********TODO change to pull from css
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
*************************************************************************/

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