
window.addEventListener("load", function () {
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    response.json().then(function (json) {
      const target = document.getElementById("missionTarget");
     target.innerHTML = `<h2 id="Mission Destination"</h2>
          <ol>
            <li> Name ${json[1].name}</li>
            <li>Diameter ${json[1].diameter}</li>
            <li> Star ${json[1].star}</li>
            <li> Distance from Earth ${json[1].distance}</li>
            <li> Number of Moons ${json[1].moons}</li>
          </ol>
          <img src="${json[1].image}"></img>`
    });
  });
});

window.addEventListener("load", function () {
let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
  event.preventDefault();
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
  else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
    alert("Please enter numerical data for both fuel level and cargo weight!");
   }


  //- this will alert if not a letter--
  else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
    alert("Please enter alphabetic data for both Pilot Name and Co-pilot Name!");
     }
  //for fuel RED
  if (fuelLevel.value < 10000 ) {
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `${pilotName.value} Ready For Launch`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName.value} Ready For Launch`;
    document.getElementById("fuelStatus").innerHTML = "Fuel Not Ready For Launch";
  }
    //for cargo RED
  else if ( cargoMass.value >= 10000) {
      document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("pilotStatus").innerHTML = `${pilotName.value} Ready For Launch`;
      document.getElementById("copilotStatus").innerHTML = `${copilotName.value} Ready For Launch`;
      document.getElementById("cargoStatus").innerHTML = "Cargo Not Ready For Launch";
    }
  //for cargo and fuel GREEN
  else if (fuelLevel.value > 10000 || cargoMass.value <= 10000) {
    document.getElementById("launchStatus").innerHTML = "Shuttle is Ready For Launch";
    document.getElementById("launchStatus").style.color = "green";
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `${pilotName.value} Ready For Launch`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName.value} Ready For Launch`;
    document.getElementById("fuelStatus").innerHTML = "Fuel level Ready For Launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo Ready For Launch";
  }
});
});



