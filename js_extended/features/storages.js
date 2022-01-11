//local-Storage
localStorage.setItem("name","Robin");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

//session-Storage
sessionStorage.setItem("name","Samuel");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

//cookies
document.cookie = "name=Kyle; expires="+new Date(2023,0,1).toUTCString(); 
console.log(document.cookie);