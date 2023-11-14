function check(form)
{

 if(form.userid.value == "" && form.pswrd.value == "")
  {
    window.open('')
  }
  else if(form.userid.value == "" && form.pswrd.value == "")
  {
    window.open('')
  }
 else if(form.userid.value == "" && form.pswrd.value == "")
  {
    window.open('')
  }
 else
 {
   Swal.fire({
  icon: 'error',
  title: "Incorrect username/password",
  text: 'You have entered the wrong username/password, if you think this is a mistake, contact support',
  footer: ''
})
  }
}
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
