
  function refresh() 
  {
    var answer = prompt("Your Name");
  document.getElementById("login").innerHTML = "Logged in as:" +  " "+ answer;

}
window.onload=refresh;

function logoutMyname() {
    var logout = confirm('Do you want to logout');
    if (logout == true ){
        document.getElementById('login').innerHTML = ""; 
        document.getElementById('logout').innerHTML = 'Login';  
    } 
};
  


