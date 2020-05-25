//Color DOM Objects
const colorPick = document.getElementById('color');
const designPick = document.getElementById('design');
const container = document.getElementsByClassName('container');

//Activities DOM objects and price caculator
const activities = document.getElementsByClassName("activities");
let checkboxes = document.querySelectorAll('input[type=checkbox]');
let value = 0;

//Total Labels
let activitySection = document.querySelector('.activities');
let costLabel = document.createElement('h1') ;
const actWarning = document.createElement('h1') ;
let cost = document.createElement('h1');
let checkCounter = 0;

console.log(container);
//Set focus on first input field
document.getElementById('name').focus();

//HIDE COLOR DIV UNTIL A THEME IS SELECTED
const colorDiv = document.getElementById("colors-js-puns");
colorDiv.hidden = true;

//BASIC INFO
//First hide the Div containing other job label and text input
document.getElementById('other-job').style.display = 'none';


//Event listener for change to the job role. Then sends to function titleTest
var title = document.getElementById("title");
title.addEventListener("change", titleTest);
//Job title if other function
function titleTest(){
  document.getElementById('other-job').style.display = 'none';
  let jobTitle = title.options[title.selectedIndex].text;
  //If the jobTitle is other it will show the hidden div.
  if (jobTitle === 'Other'){
    document.getElementById('other-job').style.display = 'block';
  }
};


// T-SHIRT INFO
//Function to remove all existing color options and add default first option:
//Found help here - https://stackoverflow.com/questions/3364493/how-do-i-clear-all-options-in-a-dropdown-box


//CREATE OPTION FOR PICKING TSHIRT THEME FIRST THEN HIDING OTHER OPTIONS
var option = document.createElement("option");
  option.text = "Pick Your Theme First";

//HIDE ALL EXISTING COLOR OPTIONS
  const selectColorOptions = document.getElementById("color").options;
  for (let i = 0; i < selectColorOptions.length; i++) {
    colorPick[i].hidden = true;
  }

//INSERT NEW DEFAULT OPTION
  colorPick.insertBefore(option, colorPick[0]);
  colorPick[0].selected = true;

//PUT LISTENER ON DESIGN PICKER
designPick.addEventListener("change", showColors);

//SHOW CORRECT COLORS
function showColors(){
  const designTheme = document.getElementById("design");
  if(designTheme.value == 'js puns'){
    colorDiv.hidden = false;
    colorPick[0].hidden = true;
    colorPick[1].hidden = false;
    colorPick[2].hidden = false;
    colorPick[3].hidden = false;
    colorPick[4].hidden = true;
    colorPick[5].hidden = true;
    colorPick[6].hidden = true;

  } else if (designTheme.value == 'heart js'){
    colorDiv.hidden = false;
    colorPick[0].hidden = true;
    colorPick[1].hidden = true;
    colorPick[2].hidden = true;
    colorPick[3].hidden = true;
    colorPick[4].hidden = false;
    colorPick[5].hidden = false;
    colorPick[6].hidden = false;

//ERROR HANDLER IF USER GOES BACK TO SELECT THEME AFTER SELECTING OTHER OPTIONS
  }else if (designTheme.value == 'Select Theme'){
    colorDiv.hidden = false;

    colorPick[0].hidden = false;
    colorPick[0].selected = true;
    colorPick[1].hidden = true;
    colorPick[2].hidden = true;
    colorPick[3].hidden = true;
    colorPick[4].hidden = true;
    colorPick[5].hidden = true;
    colorPick[6].hidden = true;
  }
};

//ACTIVITIES/
//Event click listener for when checkbox is changed
for(var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function(e){
    let clicked = e.target; //var to store the clicked checkbox input
    let dateTime = clicked.getAttribute('data-day-and-time');
    let clickedCost = clicked.getAttribute(`data-cost`); //stores the clicked checkbox data-cost attribute in "clickedCost"
    //console.log(value);
    if(clicked.checked){
      value += parseInt(clickedCost);
      checkBoxError();
    } else {
    // If unclicked, subtract the value from the activityTotal
    value -= parseInt(clickedCost);
    }

//DISABLE CONFLICTING ACTIVITES
    for(i = 0; i < checkboxes.length; i++){
      let currentSelection = checkboxes[i];


      if(dateTime === currentSelection.getAttribute('data-day-and-time') && clicked.name != currentSelection.name && clicked.checked){
        currentSelection.disabled = true;
        currentSelection.parentNode.style.color = "grey";

      } else if(!clicked.checked){
        currentSelection.disabled = false;
        currentSelection.parentNode.style.color = "black";

      }
    }
    printTotal(value);
  });
}

//PRINT ACTIVITES TOTAL
function printTotal(value){
  actWarning.innerHTML = '';
  costLabel.innerHTML = ("Your Cost For the Conference Will Be:");
  cost.innerHTML = ('$' + value);
  activitySection.appendChild(costLabel);
  activitySection.appendChild(cost);
}

//PAYMENT OPTIONS
const paymentMethod = document.getElementById("payment");
const creditDiv = document.getElementById("credit-card");
const paypalDiv = document.getElementById("paypal");
const bitcoinDiv = document.getElementById("bitcoin");

//ON WINDOW LOAD ONLY SHOWS DEFAULTS FOR PAYMENT METHOD
window.addEventListener('load', () => {
  creditDiv.hidden = false;
  paypalDiv.hidden = true;
  bitcoinDiv.hidden = true;

//DISABLED SELECT PAYMENT METHOD AS AN OPTION, BUT STILL LEFT VISIBLE
  paymentMethod[0].disabled = true;
  paymentMethod[1].selected = true;
});
//SHOW CC ON DEFAULT AND HIDE OTHERS

//CHECK PAYMENT METHOD CHANGE AND SHOW / HIDE DIVS
paymentMethod.addEventListener('change', function(e){
//CREDIT CARD
  const eventTarget = e.target.value;
  if(eventTarget === paymentMethod[1].value){
  creditDiv.hidden =  false;
  paypalDiv.hidden = true;
  bitcoinDiv.hidden = true;
  mustBeCorrect = 5;
//PAYPAL
} else if(eventTarget === paymentMethod[2].value){
    creditDiv.hidden =  true;
    paypalDiv.hidden = false;
    bitcoinDiv.hidden = true;
    mustBeCorrect = 3;

//BITCOIN
} else if(eventTarget === paymentMethod[3].value){
    creditDiv.hidden =  true;
    paypalDiv.hidden = true;
    bitcoinDiv.hidden = false;
    mustBeCorrect = 3;

//ERROR HANDLER IF THEY GO BACK TO ZERO OPTION
  } else if(eventTarget === paymentMethod[0].value){
    creditDiv.hidden =  true;
    paypalDiv.hidden = true;
    bitcoinDiv.hidden = true;
    mustBeCorrect = 3;
  }
});

//ERROR HANDLER
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");
const ccNum = document.getElementById("cc-num");
const zip = document.getElementById("zip");
const cvv = document.getElementById("cvv");


const activitiesCheck = document.querySelectorAll(".activities input");

const expMonth = document.getElementById("exp-month");
const expYear = document.getElementById("exp-year");
const defaultOptionMonth = document.createElement("option");
const defaultOptionYear= document.createElement("option");

const registerButton = document.querySelector('button[type="submit"]')
let totalCorrect = 0;
let mustBeCorrect = 6;

defaultOptionMonth.text = ("Pick Your Month");
expMonth.insertBefore(defaultOptionMonth, expMonth[0]);
expMonth[0].selected = true;

defaultOptionYear.text = ("Pick Your Year");
expYear.insertBefore(defaultOptionYear, expYear[0]);
expYear[0].selected = true;


//PREVENT FORM DEFAULT SUBMIT ON EACH FIELD
form.addEventListener("submit", (e) => {
  e.preventDefault(nameInput);
  e.preventDefault(emailInput);
  e.preventDefault(ccNum);
  e.preventDefault(zip);
  e.preventDefault(cvv);
});

//REGISTER BUTTON CLICK LISTNER - CHECKS IF ALL FIELDS ARE CORRECT AND TOTOALCORRECT = 5
registerButton.addEventListener("click", (f) => {


//CHECK IF CC IS SELETED TO ADD VALUE TO MUSTBECORRECT OR NOT

//CHECK IF CC NUM, ZIP AND CVV LENGTH IS  WRONG ONLY FIRE WHEN CREDIT DIV IS VISIBLE
  if(creditDiv.hidden ==  false){
    var numCheck = ccNum.value;
    if (numCheck.length <13 || numCheck.length > 16){
      alert("Please enter a number that is between 13 and 16 digits long.");
    }

    var zipCheck = zip.value;
    if (zipCheck.length != 5){
      alert("Enter a valid zip Code");
    }

    var cvvCheck = cvv.value;
    if (cvvCheck.length != 3){
      alert("Enter a valid CVV Number");
    }
  }
  //CLEAR ACITIVTY WARNINGS
  actWarning.innerHTML = "";

  //CHECK PAYMENT METHOD



  if (totalCorrect == mustBeCorrect){
    alert("Congratulations on your purchase, we hope you enjoy!");
    location.reload();
//END APP AND RELOAD PAGE
    if(paymentMethod.value == paymentMethod[0].value){
      alert('Choose a payment method first');
    }
  }
  else{
    alert("You haven't filled out all of the fields correctly yet. Please try again.");
    if (checkCounter <= 0){
      activitySection.appendChild(actWarning);
      actWarning.innerHTML = "You need to select at least 1 activity";
    }
  }

});

//INPUT LISTENERS ONCE INPUT ENTERED AND THEN ERROR CHECK
nameInput.addEventListener("blur", nameError);
emailInput.addEventListener("blur", emailError);
ccNum.addEventListener("blur", ccNumError);
zip.addEventListener("blur", ccZipError);
cvv.addEventListener("blur", cvvError);

//NAME ERROR HANDLER
function nameError(){
  const nameRegex = (/^[a-zA-Z ]{2,30}/);
  let nameResult = false;
  if (nameRegex.test(nameInput.value)) {
        nameResult = true;
  } if (nameResult == true){
    nameInput.style.borderColor = "green";
    totalCorrect += 1;
  } else if (nameResult == false){
    nameInput.style.borderColor = "red";
  }
}

//CC NUM ERROR HANDLER -
function ccNumError(){
  const ccRegex = (/^[1-9][0-9]{12,15}$/);
  let ccResult = false;
  if (ccRegex.test(ccNum.value)) {
        ccResult = true;
  } if (ccResult == true){
    ccNum.style.borderColor = "green";
    totalCorrect += 1;
  } else if (ccResult == false){
    ccNum.style.borderColor = "red";
  }

}


//CC ZIP CODE ERROR HANDLER
function ccZipError(){
  const zipRegex = (/^[1-9]{5}$/);
  let zipResult = false;
  if (zipRegex.test(zip.value)) {
        zipResult = true;
  } if (zipResult == true){
    zip.style.borderColor = "green";
    totalCorrect += 1;
  } else if (zipResult == false){
    zip.style.borderColor = "red";
  }
}

//CVV ERROR HANDLER
function cvvError(){
  const cvvRegex = (/^[1-9]{3}$/);
  let cvvResult = false;
  if (cvvRegex.test(cvv.value)) {
        cvvResult = true;
  } if (cvvResult == true){
    cvv.style.borderColor = "green";
    totalCorrect += 1;
  } else if (cvvResult == false){
    cvv.style.borderColor = "red";
  }
}

//EMAIL ERROR HANDLER
function emailError(){
  const emailRegex = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/);
  let emailResult = false;
  if (emailRegex.test(emailInput.value)) {
        emailResult = true;
  } if (emailResult == true){
    emailInput.style.borderColor = "green";
    totalCorrect +=1;
  } else if (emailResult == false){
    emailInput.style.borderColor = "red";
  }
}

//ENSURE AT LEAST 1 ACTIVITY IS CHOSEN
function checkBoxError(){
  for (let checkBoxCounter = 0; checkBoxCounter < checkboxes.length; checkBoxCounter++) {
    if (checkboxes[checkBoxCounter].checked) {
        checkCounter += 1;
    }
  }
  if(checkCounter == 1){
    totalCorrect +=1;
  }
}
