
//Set focus on first input field
document.getElementById('name').focus();
//First hide the Div containing other job label and text input
document.getElementById('other-job').style.display = 'none';
//Disable Color dropdown and set initial text

const colorPick = document.getElementById('color');
const colorPick2 = document.getElementById('color');

const designPick = document.getElementById('design');

//Removes all existing options in color pick section until theme is chosen
for(i = 0; i=colorPick.length; i++){
  colorPick.remove(colorPick.i);
}
var option = document.createElement("option");
option.text = "Pick Your Theme First";
colorPick.add(option);

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

designPick.addEventListener("change", showColors)
console.log(colorPick2);

function showColors(){
    colorPick.options[0] = null;
    const designTheme = document.getElementById("design").value;
    if(designTheme == 'js puns'){
      colorPick.options[0] = null;

      let newOption = new Option(colorPick2,'Option Value');
      colorPick.add(newOption,undefined);





    }
    else if (designTheme == 'heart js'){

    }
}
