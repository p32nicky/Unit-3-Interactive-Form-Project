//Color DOM Objects
const colorPick = document.getElementById('color');
const designPick = document.getElementById('design');

//Activities DOM objects and price caculator
const activities = document.getElementsByClassName("activities");
var checkboxes = document.querySelectorAll('input[type=checkbox]');
let value = 0;

//Total Labels
let activitySection = document.querySelector('.activities');
let costLabel = document.createElement('h1') ;
let cost = document.createElement('h1');

//Set focus on first input field
document.getElementById('name').focus();

//HIDE COLOR DIV UNTIL A THEME IS SELECTED
const colorDiv = document.getElementById("colors-js-puns");
colorDiv.hidden = true;

//BASIC INFO
//First hide the Div containing other job label and text input
document.getElementById('other-job').style.display = 'none';

//Event listener for change to the job role. Then sends to function titleTest
var e = document.getElementById("title");
e.addEventListener("change", titleTest);
//Job title if other function
function titleTest(){
  let jobTitle = e.options[e.selectedIndex].text;
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
  costLabel.innerHTML = ("Your Cost For the Conference Will Be:");
  cost.innerHTML = ('$' + value);
  //console.log(costLabel);
  //console.log(cost);
  //console.log(activitySection);
  activitySection.appendChild(costLabel);
  activitySection.appendChild(cost);
}

//PAYMENT OPTIONS
const paymentMethod = document.getElementById("payment");
const creditDiv = document.getElementById("credit-card");
const paypalDiv = document.getElementById("paypal");
const bitcoinDiv = document.getElementById("bitcoin");

//HIDE ALL ON DEFAULT
creditDiv.hidden = true;
paypalDiv.hidden = true;
bitcoinDiv.hidden = true;

paymentMethod.addEventListener('change', function(e){
//CREDIT CARD
  const eventTarget = e.target.value;
  if(eventTarget === paymentMethod[1].value){
  creditDiv.hidden =  false;
  paypalDiv.hidden = true;
  bitcoinDiv.hidden = true;
//PAYPAL
} else if(eventTarget === paymentMethod[2].value){
    creditDiv.hidden =  true;
    paypalDiv.hidden = false;
    bitcoinDiv.hidden = true;
//BITCOIN
} else if(eventTarget === paymentMethod[3].value){
    creditDiv.hidden =  true;
    paypalDiv.hidden = true;
    bitcoinDiv.hidden = false;
//ERROR HANDLER IF THEY GO BACK TO ZERO OPTION
  } else if(eventTarget === paymentMethod[0].value){
    creditDiv.hidden =  true;
    paypalDiv.hidden = true;
    bitcoinDiv.hidden = true;
  //BITCOIN
  }
});


//ERROR HANDLER
let registerButton = document.querySelector('button[type="submit"]')

registerButton.onclick = function(){
  alert('fuck');
};
