// Jodi L. Hess, CSC423, HW #2, 9/2716 Java Script to check validation of html


///////////////// Check Name Section ///////////////

function checkfn(fn) {
  if (fn.match(/^[a-zA-Z-]+$/) && isNaN(fn)) {
    return;
  } else {
    errorMessage = "Invalid First Name, Can Only Contain Letters and Hyphen";
    alert(errorMessage);
    return false;
  }
}


function checkmi(mi) {
  if ((mi.length = 1) && (mi.match(/\D/))) {
    return;
  } else {
    alert("Invalid Middle Initial");
    return false;
  }
}


function checkln(ln) {
  if (isNaN(ln) && ln.match(/^[a-zA-Z-']+$/)) {
    return;
  } else {
    alert ("Invild Last Name, Can Only Contain Letters and Apostrophe");

    return false;
  }
}


///////////////// Check Address ////////////////////////////

function checkcity(city) {
  if (city.match(/^[a-zA-Z- ]+$/)) {
    return;
  } else {
    errorMessage = "Invalid City Name, Cannot Contain Numbers";
    alert(errorMessage);
    return false;
  }
}


function checkzip(zip)
{
  if (zip.match(/[0-9]{5}/))
	 return;
  else { errorMessage = "Invalid Zip Code, Please input 5 digits.";
        alert(errorMessage);
        return false;
       }
}


///// 10/1/2016  ALERT IS WORKING ON ZIP & BDAY, but gives error when info is correct  //////
	 ///// Those are the only error alerts that pop-up. Other errors are not caught. ///

/// UPDATE: 10/2/2016 All error alerts are working correctly exept the year.
///  Year says invalid for 1959 //////


///////////////// Check Birthday  //////////////////////////


function checkbmonth(bmonth) {
  if (bmonth>=1 && bmonth <= 12)
    return;
  else {
    errorMessage = "Invalid Date, Please select a month from 1-12.";
    alert(errorMessage);
  }
}

function checkbday(bday,bmonth) {
  if ((bmonth==1 || bmonth == 3 || bmonth==5 || bmonth == 7 || bmonth==8 || bmonth == 10|| bmonth == 12) && bday>=1 && bday<=31)
    return;
  else if((bmonth==4 || bmonth == 6 || bmonth==9 || bmonth == 11) && bday>=1 && bday<=30)
    return;
  else if(bmonth == 2 && bday >=1 && bday <=29)
    return;
  else {
    errorMessage = "Invalid Date, Please select a date from 1-31.";
    alert(errorMessage);
    return false;
  }
}

//// ERROR IN YEAR; Popup alert says invalid year for 1959. ////


function checkbyear(byear)
{
  if (byear >= 1913 && byear <= 1999)
  {
    return;
  }
  else
  {
    errorMessage = "Invalid Year, Please select a year from 1913 - 1999.";
    alert(errorMessage);
    return false;
  }
}


///////////////// Check Violations  //////////////////////////

function checkviol(viol) {
  if (viol >= 0 && (viol <= 100)) {
    return;
  } else {
    errorMessage = "Invalid Traffic Violations. Please see Administrator.";
    alert(errorMessage);
  }
}
function checkCar(make,model){  // noprotect
  var cars = {};
  cars.Chevrolet = ["Camaro","Caprice","Equinox","Tahoe","Traverse","Volt"];
  cars.Ford = ["Edge","Expedition","Fiesta"];
  cars.Honda = ["Accord","Civic","Odyssey"];
  cars.Kia = ["Optima","Rondo","Soul"];
  cars.Pontiac = ["Vibe"];
  cars.Toyota = ["Camry","Corolla","RAV4"];
  cars.Dodge = ["Caravan","Ram",];

  if(!cars[make]){
    alert("No such make exists!")
    return false;
  }
  var flag = false;
  for(var i = 0; i < cars[make].length; i++){
    if(cars[make][i] == model){
            flag = true;
    }
  }
  if(!flag){
    alert("No Car Selected or Make/model do not match!")
    return false;
  }

}

function validateForm() {
  alert("Processing Your Data");
  var fn = document.getElementById("Fname").value;
  var mi = document.getElementById("MInitial").value;
  var ln = document.getElementById("Lname").value;
  var city = document.getElementById("city").value;
  var zip = document.getElementById("Zip").value;
  var bmonth = document.getElementById("month").value;
  var bday = document.getElementById("day").value;
  var byear = document.getElementById("year").value;
  var viol = document.getElementById("violations").value;
  var make = document.getElementById("CarMake").value;
    var model = document.getElementById("CarModel").value;

// if any above have error, send error message for correction.

  var errorMessage = "";

  checkfn(fn);
  checkmi(mi);
  checkln(ln);
  checkcity(city);
  checkzip(zip);
  checkbmonth(bmonth);
  checkbday(bday,bmonth);
  checkbyear(byear);
  checkviol(viol);
  checkCar(make,model);
}


//////////////////////////////////////////////////////////
