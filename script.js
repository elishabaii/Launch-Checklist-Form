
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
  //event.preventDefault();


  //---alert if no entry
  if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
    // if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" ) {
    alert("All fields are required!");
    // event.preventDefault();
  }

  //--  alert if not a number
  else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
    alert("Please enter numerical data for both fuel level and cargo weight!");
    //event.preventDefault();
  }


  //- this will alert if not a letter--
  else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
    alert("Please enter alphabetic data for both Pilot Name and Co-pilot Name!");
    // event.preventDefault();
  }
  //for cargo and fuel RED
  if (fuelLevel.value < 10000 || cargoMass.value > 10000) {
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `${pilotName.value} Ready For Launch`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName.value} Ready For Launch`;
    document.getElementById("fuelStatus").innerHTML = "Fuel Not Ready For Launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo Not Ready For Launch";
    //event.preventDefault();
  }
  //for cargo and fuel GREEN
  if (fuelLevel.value > 10000 || cargoMass.value < 10000) {
    document.getElementById("launchStatus").innerHTML = "Shuttle is Ready For Launch";
    document.getElementById("launchStatus").style.color = "green";
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `${pilotName.value} Ready For Launch`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName.value} Ready For Launch`;
    document.getElementById("fuelStatus").innerHTML = "Fuel level Ready For Launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo Ready For Launch";
    // event.preventDefault();
  }
});
});






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



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
                 window.addEventListener("load", function() {
            fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("missionTarget");
                  // Add HTML that includes the JSON data
                  <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[1].name}</li>
   <li>Diameter: ${json[1].diameter}</li>
   <li>Star: ${json[1].star}</li>
   <li>Distance from Earth: ${json[1].distance}</li>
   <li>Number of Moons: ${json[1].moons}</li>
</ol>
<img src="${json[1].image}"
                  div.innerHTML = missionTarget
            });


<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[1].name}</li>
   <li>Diameter: ${json[1].diameter}</li>
   <li>Star: ${json[1].star}</li>
   <li>Distance from Earth: ${json[1].distance}</li>
   <li>Number of Moons: ${json[1].moons}</li>
</ol>
<img src="${json[1].image}">
*/

/*
 {
        "name": "Pern",
        "diameter": "measurement is under dispute",
        "star": "Alpha Sagittarius (a.k.a. Rukbat)",
        "distance": "Varies - find a library",
        "image": "https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg",
        "moons": 2
    },
    */
/* fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
response.json().then( function(json) {
   const missionTarget = document.getElementById("missionTarget");

   missionTarget.innerHTML=
   <h2>Mission Destination</h2>
<ol>
<li>Name: ${json[1].name}</li>
<li>Diameter: ${json[1].diameter}</li>
<li>Star: ${json[1].star}</li>
<li>Distance from Earth: ${json[1].distance}</li>
<li>Number of Moons: ${json[1].moons}</li>
</ol>
<img src="${json[1].image}"
}
*/

