function validateFullForm() {
  var xFirst = document.forms["ritikaForm"]["first_name"].value;
  var yFirst = document.forms["ritikaForm"]["last_name"].value;
  var xUsername = document.forms["ritikaForm"]["username"].value;
  var yPassw = document.forms["ritikaForm"]["pword_dogs"].value;
  var xIceCream = document.forms["ritikaForm"]["ice_cream"].value;
  var xAge = document.forms["ritikaForm"]["age"].value;

  if ((xFirst === "Ritika" || xFirst === "ritika") && (yFirst === "Maknoor" || yFirst === "maknoor") && (xUsername === "Rit") && (yPassw === "dogs123") && (xIceCream === "chocolate") && (xAge === "22")) {
    document.getElementById('entirePage').innerHTML="Form is all correct! Thanks for submitting the form.";
    return false;
  }
  else {
    if (xFirst !== "Ritika" || xFirst !== "ritika" || yFirst !== "Maknoor" || yFirst !== "maknoor") {
      document.getElementById('fieldsetOne').style.border = "2px solid red";
    }
    if (xUsername !== "Rit" || yPassw !== "dogs123") {
      document.getElementById('fieldsetTwo').style.border = "2px solid red";
    }
    if (xIceCream !== "chocolate") {
      document.getElementById('fieldsetThree').style.border = "2px solid red";
      }
    if (xAge !== "22") {
      document.getElementById('fieldsetFour').style.border = "2px solid red";
    }
    alert("Form is wrong! Try again. Please fix incorrect sections.");
    return false;
  }
}

function validateFormOne() {
  var xFirst = document.forms["ritikaForm"]["first_name"].value;
  var yFirst = document.forms["ritikaForm"]["last_name"].value;

  if ((xFirst === "Ritika" || xFirst === "ritika") && (yFirst === "Maknoor" || yFirst === "maknoor")) {
    alert("Correct!");
    return false;
  }
  else if ((xFirst === "") && (yFirst === "")) {
    alert("Error. Must submit a first and last name.");
    return false;
  }
  else if (xFirst === "") {
    alert("Error. Must submit a first name.");
    return false;
  }
  else if (yFirst === "") {
    alert("Error. Must submit a last name.");
    return false;
  }
  else {
    alert("Wrong! Try again.");
    return false;
  }
}

function validateFormTwo() {
  var xUsername = document.forms["ritikaForm"]["username"].value;
  var yPassw = document.forms["ritikaForm"]["pword_dogs"].value;

  if ((xUsername === "Rit") && (yPassw === "dogs123")) {
    alert("Correct!");
    return false;
  }
  else if ((xUsername === "") && (yPassw === "")) {
    alert("Error. Must submit a username and password.");
    return false;
  }
  else if (xUsername === "") {
    alert("Error. Must submit a username.");
    return false;
  }
  else if (yPassw === "") {
    alert("Error. Must submit a password.");
    return false;
  }
  else {
    alert("Wrong! Try again.");
    return false;
  }
}

function validateFormThree() {
  var xIceCream = document.forms["ritikaForm"]["ice_cream"].value;

  if (xIceCream === "chocolate") {
    alert("Correct!");
    return false;
  }
  else {
    alert("Wrong! Try again.");
    return false;
  }
}

function validateFormFour() {
  var xAge = document.forms["ritikaForm"]["age"].value;

  if (xAge === "22") {
    alert("Correct!");
    return false;
  }
  else {
    alert("Wrong! Try again.");
    return false;
  }
}

function validateFormFive() {
  alert("Nice autobiography!");
  return false;
}
