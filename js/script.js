/*Declaring variables*/


function getDayofWeek(){
  var days=["Sunday","Monday","Tuesday","Wesnesday","Thursday","Friday","Saturday"];
  var maleNames=["Kwasi","Kwadwo","Kwabena", "Kwaku","Yaw","Kofi","Kwame"];
  var femaleNames=["Akosua", "Adwoa", "Abenaa","Akua","Yaa","Afua","Ama"];

  let cc=parseInt(document.getElementById("centuryear").value);
  let dd=parseInt(document.getElementById("birthdate").value);
  let mm=parseInt(document.getElementById("monthdate").value);
  let yy=parseInt(document.getElementById("birthyear").value);

  if(mm<=1 && mm>12)
  {gendergendergender
    alert("Invalid Month");
  }else if (dd<=0 && dd>31)
  {
    alert("Invalid date of Birth");
  }
gender
    var dayOfWeek= Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7);

    var gender= document.querySelector('input[name="Gender"]:checked').value;
    if(gender==="Male"){
      maleGender= "male"
    }
    else if (gender==="Female"){
      femaleGender="female";
    }
    else {
      alert("No gender was selected");
    }
if (maleGender)
{
  console.log(days[dayOfWeek]);
  console.log(maleNames[dayOfWeek]);
}
if (femaleNamesGender)
{
  console.log(days[dayOfWeek]);
  console.log(femaleNames[dayOfWeek]);
  alert ('Your name is  "+femaName+" and you were born on "dayOfWeek");
}
}
