function check(form)
{
 
 if(form.userid.value == "guest user" && form.pswrd.value == "1")
  {
    window.open('\ihulerihjzdfihulhuilfdihulbhjdzghiulhiugfd.html')
  }
  else if(form.userid.value == "Betatester" && form.pswrd.value == "Betatestingisthebest654321$$$$$$")
  {
    window.open('\khjfshuisfhujfrhuildsfhuisfhuidfihuldfsa.html')
  }
 else if(form.userid.value == "georgethecool" && form.pswrd.value == "georgeisthebest123")
  {
    window.open('\hdfhdfkhdgkhjdiaegoiuaeruoipaer.html')
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