const tableDiv = document.getElementById("table");

// Dylan Chang | 301294233

const pandaMessageP = document.getElementById("panda-message");
const messagePanda = [
  "Click on me!",
  "Hello!",
  "My name is Panda!",
  "I'm Dylan's pet",
  "I hope you like me!",
  "UwU",
  "Stop clicking on me!",
  "Stop :c",
  "I'm sad",
  "If you still clicking i'll die",
  "x.x",
];

var rows = 0;
var columns = 0;

function clickPanda() {
  let newMessage =
    messagePanda[messagePanda.indexOf(pandaMessageP.innerText) + 1];

  if (newMessage != undefined) {
    pandaMessageP.innerText = newMessage;
  } else {
    document.getElementById("panda-image").src = "";
  }
}

function displayMessage(message) {
  if (message === false) return;

  let messElement = document.getElementById("display-message");

  messElement.innerText = message;

  setTimeout(() => {
    messElement.innerHTML = "&nbsp;";
  }, 3000);
}

// document.addEventListener("load", clickGenerate());

function clickDelete() {
  tableDiv.innerHTML = "";
  rows = 0;
  columns = 0;
  document.getElementById("input-row").value = "0";
  document.getElementById("input-column").value = "0";
}

function clickGenerate() {
  let newRows = parseInt(document.getElementById("input-row").value);
  let newColumns = parseInt(document.getElementById("input-column").value);

  if (newRows + newColumns < 2) {
    displayMessage("Your values are not valid");
    return;
  }

  if (newColumns > 20) {
    displayMessage("You can't add more than 20 columns");
    return;
  }

  if (rows != newRows || columns != newColumns) {
    tableDiv.innerHTML = "";

    rows = newRows <= 0 ? 1 : newRows;
    columns = newColumns <= 0 ? 1 : newColumns;

    let tableObj = document.createElement("table");

    for (let i = 1; i < rows + 1; i++) {
      const newRow = document.createElement("tr");

      for (let j = 1; j < columns + 1; j++) {
        const newCell = document.createElement("td");
        newCell.textContent = `${i * j}`;

        newRow.appendChild(newCell);
      }

      tableObj.appendChild(newRow);
    }

    tableDiv.appendChild(tableObj);
  } else {
    displayMessage("You already generated a table with these values.");
  }
}
