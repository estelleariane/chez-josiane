function ValidateForm(inputText)
{

  let x = document.forms["form1"]["firstname"].value;
  if (x == "") {
    alert("Name must be filled out");
    document.form1.firstname.focus();
    return false;
  }

  
  let y = document.forms["form1"]["lastname"].value;
  if (y == "") {
    alert("Last Name must be filled out");
    document.form1.lastname.focus();
    return false;
  }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        alert("We appreciate you contacting us. One of our associates will get back in touch with you soon!Have a great day!");
        document.form1.Email.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address! " + inputText.value);
        document.form1.Email.focus();
        return false;
    }
}

function SubmitForm()
{
return false
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
