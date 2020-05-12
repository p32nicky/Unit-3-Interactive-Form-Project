
//Set focus on first input field
document.getElementById('name').focus();
//First hide the Div containing other job label and text input
document.getElementById('other-job').style.display = 'none';
//Disable Color dropdown and set initial text

const colorPick = document.getElementById('color');
colorPick.disabled = true;
colorPick.add("Pick Your Theme First");

//Tshirt Color Function
var colorDefault = document.getElementById('design');
colorDefault.size = 0;

var e = document.getElementById("title");
e.addEventListener("change", titleTest);
//Event listener for change to the job role. Then sends to function titleTest

function titleTest(){
  let jobTitle = e.options[e.selectedIndex].text;
  //If the jobTitle is other it will show the hidden div.
  if (jobTitle === 'Other'){
    document.getElementById('other-job').style.display = 'block';
  }
};


colorDefault.addEventListener("change", showColors)

function showColors(){
  colorPick.remove("Pick Your Theme First");
  document.getElementById('color').disabled = false;
}
