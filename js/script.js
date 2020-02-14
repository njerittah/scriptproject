//  Declaring variables
var century, year,month,dayOfmonth;
var days=["Sunday","Monday","Tuesday","Wesnesday","Thursday","Friday","Saturday","Sunday"];
var maleNames=["Kwasi","Kwadwo","Kwabena", "Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua", "Adwoa", "Abenaa","Akua","Yaa","Afua""Ama"];


  function getDayofWeek(){
  cc=parseInt(document.getElementById("centuryear").value);
  dd=parseInt(document.getElementById("birthdate").value);
  mm=parseInt(document.getElementById)("monthdate").value);
  yy=parseInt(document.getElementById)("birthyear").value);

  If((mm<1)||(mm<12)){
    alert("Invalid Month");
  }
  else if((dd<0)||(dd>31){
    alert("Invalid date of Birth")
  }
  else{
    var dayOfWeek= Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) mod 7);
return dayOfWeek;

  }

  function checkGender(){
    var gender= documentgetElementByName("Gender");
    if(gender[0].checked===true){
      var gender= "male"
    }
    else if (gender[1].checked===true){
      var gender="female";
    }
    else {
      console.log("No gender was selected");
    }
    alert(gender);
    return gender;
  }
}
  function findName(){
    var newCallDay=getDayofWeek();
    var newGender=checkGender();

if (newGender==="male"){
  document.getElementById("answer").innerhtml=("Your birthday is" +days{newDayOfWeek}+"and your name is"+maleName+);
}else if (newGender==="female"){
  document.getElementById("answer").innerhtml=("Your birthday is" +days{newDayOfWeek}+"and your name is"+femaleName+   );

}
