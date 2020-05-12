
//Set focus on first input field
document.getElementById('name').focus();
//First hide the Div containing other job label and text input
document.getElementById('other-job').style.display = 'none';
//Disable Color dropdown and set initial text

const colorPick = document.getElementById('color');

//Default Options for Colors Function

for(i = 0; i<=colorPick.length; i++){
  colorPick.remove(i);
}
//colorPick.add("Pick Your Theme First");

//Event listener for change to the job role. Then sends to function titleTest
var e = document.getElementById("title");
e.addEventListener("change", titleTest);

function titleTest(){
  let jobTitle = e.options[e.selectedIndex].text;
  //If the jobTitle is other it will show the hidden div.
  if (jobTitle === 'Other'){
    document.getElementById('other-job').style.display = 'block';
  }
};


colorPick.addEventListener("change", showColors)

function showColors(){
  colorPick.remove("Pick Your Theme First");
}
