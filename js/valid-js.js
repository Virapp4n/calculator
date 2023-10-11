
function validate(){
  const username = document.getElementById('username').value;
  const passwd = document.getElementById('passwd').value;

  if(username==="" || passwd==="")
  {
    alert("Fields Shouldn't be Empty");
    return false;
  }
}