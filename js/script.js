//Color DOM Objects
const colorPick = document.getElementById('color');
const designPick = document.getElementById('design');

//Activities DOM objects and price caculator
const activities = document.getElementsByClassName("activities");
var checkboxes = document.querySelectorAll('input[type=checkbox]');
let value = 0;

let activitySection = document.querySelector('.activities');
let costLabel = document.createElement('h1') ;
let cost = document.createElement('h1');

//Function to remove all existing color options:
//Found help here - https://stackoverflow.com/questions/3364493/how-do-i-clear-all-options-in-a-dropdown-box
function clearColor(){
  var clearColor = document.getElementById("color");
  var colorLength = clearColor.options.length;
  for (i = colorLength-1; i >= 0; i--) {
    clearColor.options[i] = null;
  }
}

clearColor();

//Creates new Pick your Theme First option in color dropdown
var option = document.createElement("option");
option.text = "Pick Your Theme First";
colorPick.add(option, colorPick[0]);

//Set focus on first input field
document.getElementById('name').focus();
//First hide the Div containing other job label and text input
document.getElementById('other-job').style.display = 'none';
//Disable Color dropdown and set initial text

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

//Change listener to the selector options
designPick.addEventListener("change", showColors);

function showColors(){
    const designTheme = document.getElementById("design").value;
    if(designTheme == 'js puns'){
      clearColor();
      var newOption1 = document.createElement("option");
      newOption1.text = ("Cornflower Blue (JS Puns shirt only");
      colorPick.add(newOption1, colorPick[1]);
      var newOption2 = document.createElement("option");
      newOption2.text = ("Dark Slate Grey (JS Puns shirt only)");
      colorPick.add(newOption2, colorPick[2]);
      var newOption3 = document.createElement("option");
      newOption3.text = ("Gold (JS Puns shirt only)");
      colorPick.add(newOption3, colorPick[3]);
    }

    else if (designTheme == 'heart js'){
      clearColor();
      var newOption1 = document.createElement("option");
      newOption1.text = ("Tomato (I " + `\u2764` + "JS shirt only)");
      colorPick.add(newOption1, colorPick[1]);
      var newOption2 = document.createElement("option");
      newOption2.text = ("Steel Blue (I " + `\u2764` + "JS shirt only)");
      colorPick.add(newOption2, colorPick[2]);
      var newOption3 = document.createElement("option");
      newOption3.text = ("Dim Grey (I " + `\u2764` + "JS shirt only)");
      colorPick.add(newOption3, colorPick[3]);

  }
}

//Event click listener for when checkbox is changed

for(var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function(e){
    let clicked = e.target; //var to store the clicked checkbox input
    let clickedCost = clicked.getAttribute(`data-cost`); //stores the clicked checkbox data-cost attribute in "clickedCost"
        //console.log(value);
    if(clicked.checked){
      value += parseInt(clickedCost);
    } else {
    // If unclicked, subtract the value from the activityTotal
    value -= parseInt(clickedCost);
    }
    printTotal(value);
  });
};

    //Display Label for activities cost - Only display is value > 0
function printTotal(value){


    costLabel.innerHTML = ("Your Cost For the Conference Will Be:");
    cost.innerHTML = ('$' + value);
    //console.log(costLabel);
    //console.log(cost);
    //console.log(activitySection);
    activitySection.appendChild(costLabel);
    activitySection.appendChild(cost);
}
