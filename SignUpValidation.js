function addValidation(){
  console.log("here")
  $("#signUp").submit(function (e){

    if(formValid()){
      window.alert("Thank you for your money.");
    }
    else{
      e.preventDefault();
      window.alert("Oops, you didn't fill out your form correctly!");
    }




  })

}

function formValid(){
  var valid = true;
  var required = $(".form-control");
  for (var i = 0 ; i < required.length ; i++){
    if (required[i].value == ""){
      $(required[i]).css("background-color", "#ffc1c1");
      valid = false;
    }
    else{
      $(required[i]).css("background-color", "inherit");
    }
  }
  if( ! $("#terms").is(":checked") ){
    window.alert("You have not agreed to the terms and conditions.")
    $("#terms").parent().css("background-color", "red");
  }
  else{
    $("#terms").parent().css("background-color", "inherit");
  }

  return valid;
}


function start(){
		addValidation();
}

$(document).ready(start);
