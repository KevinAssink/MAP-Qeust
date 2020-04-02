const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');

let currentLocation = 15;


let locations = []; // 0 tot 3 zijn geen echte locaties om de map klein te houden.
locations[0] = "geen locatie";
locations[1] = "geen locatie";
locations[2] = "geen locatie";
locations[3] = "geen locatie";
locations[4] = "gang 1";
locations[5] = "gang 2";
locations[6] = "deur?";
locations[7] = "geheime kamer";
locations[8] = "gang 3";
locations[9] = "gang 4";
locations[10] = "gang 5";
locations[11] = "gang 6";
locations[12] = "Doodlopende gang";
locations[13] = "gang 7";
locations[14] = "zombie horde";
locations[15] = "ingang";

images = [];
images[0] = "room0.jpg";// kamers 0 tot 3 hebben plaatjes maar dienen geen nut.
images[1] = "room1.jpg";
images[2] = "room2.jpg";
images[3] = "room3.png";
images[4] = "room4.png";
images[5] = "room5.png";
images[6] = "room6.png";
images[7] = "room7.png";
images[8] = "room8.png";
images[9] = "room9.png";
images[10] = "room10.png";
images[11] = "room11.png";
images[12] = "room12.png";
images[13] = "room13.png";
images[14] = "room14.png";
images[15] = "room15.png";

directions = [];// kamer 0 tot 4 zijn of limits dus is er geen movements daar.
directions[0] = [];
directions[1] = [];
directions[2] = [];
directions[3] = [];
directions[4] = ["oost","zuid"];
directions[5] = ["oost", "west", "zuid"];
directions[6] = ["oost", "west", "zuid"];
directions[7] = ["west"];
directions[8] = ["noord", "oost", "zuid"];
directions[9] = ["noord", "oost", "west", "zuid"];
directions[10] = ["noord", "oost", "west"];
directions[11] = ["west", "zuid"]
directions[12] = ["noord"];
directions[13] = ["noord"];
directions[14] = ["oost"];
directions[15] = ["noord", "west"];


descriptions = [];// kamers 0 tot 4 hoor je niet te komen
descriptions[0] = "how did you get here?";
descriptions[1] = "how did you get here?";
descriptions[2] = "how did you get here?";
descriptions[3] = "how did you get here?";
descriptions[4] = "een lege gang, niet heel veel te zien.";
descriptions[5] = "je staat in een gang met een paar andere richtingen.";
descriptions[6] = "je bent rechtdoor gegaan, je ziet dat je kanten op kan, maar een kant is een dichte deur, misschien dat je ergens een sleutel moet vinden om deze te openen...";
descriptions[7] = "het lijkt erop dat de sleutel paste! en in het midden van kamer is een kist met het Cure! het lijkt erop dat de corona epidemie eindelijk voor bij is! (or is it.....) YOU WON! ";
descriptions[8] = "de gang waar je staat lijkt erop dat je maar 1 andere kant op kan, hmm wat is slim ;) ";
descriptions[9] = "je staat in een gang waar je 4 kanten op kan, welke kant zou slim zijn om op te gaan?";
descriptions[10] = "je bent verder gelopen in de grot, je ziet nu dat het pad zich in drie splits, elke kant ziet er wel veilig uit, maar je hebt wel een slecht gevoel....";
descriptions[11] = "je bent de grot in gekomen, het is donker, maar het lijkt een veilige grot, het lijkt erop dat je alleen naar links kan.";
descriptions[12] = "je staat in een gang niet echt iets specials hier..";
descriptions[13] = "je bent een gang in gegaan en ziet alleen een sleutel aan de muur hangen, waar zou deze toch nodig voor zijn?";
descriptions[14] = "je ziet in de verte een zombie horde aankomen! ik zou maar snel weer naar die grot gaan!";
descriptions[15] = "je bent aan het wegrennen van de Corona Zombies, maar je bent een grot tegengekomen.";


myInput.addEventListener('keydown', getInput, false);

function getInput(evt) {
  if (evt.key == "Enter") {
    let inputArray = myInput.value.split(" ");

    if (inputArray[0] == "ga") {
      if (directions[currentLocation].indexOf(inputArray[1]) != -1) {
        switch (inputArray[1]) {
          case "noord":
            currentLocation -= 4;
            break;
          case "zuid":
            currentLocation += 4;
            break;
          case "oost":
            currentLocation += 1;
            break;
          case "west":
            currentLocation -= 1;
            break;
        }
      } else {
        feedback.innerHTML = "theres a time and place for everything, but not now and not here.";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation();
      myInput.value = "";
    }

    if (inputArray[0] == "pak") {
      console.log('ga wat pakken');
      myInput.value = "";
    }

    if (inputArray[0] == "gebruik"){
      console.log('ga wat gebruiken');
      myInput.value = "";
    }

    if (inputArray[0] != "ga" && inputArray[0] != "pak" && inputArray[0] != "gebruik" ){
      feedback.innerHTML = "mogelijke commando's zijn: ga, pak, gebruik en help";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }

  }
}

function giveLocation() {
  divLocation.innerHTML = locations[currentLocation];
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "media/" + images[currentLocation];
  myDirections = "mogelijke richtingen zijn: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
  myPossibilities.innerHTML = myDirections;
  myInventory.innerHTML = "je hebt nog niks bij je.";
}

function removeFeedback() {
  feedback.innerHTML = "";
}



giveLocation();
