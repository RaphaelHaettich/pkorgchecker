var detaildaten = document.documentElement.innerHTML.indexOf('Detaildaten');
if(detaildaten != -1){
var position = document.documentElement.innerHTML.indexOf('bestanden');
var position1 = document.documentElement.innerHTML.indexOf('Bestanden');
if(position != -1 || position1 != -1){
alert("FOUND!");
}else{
  console.log("nothing yet")
  setTimeout(function(){
     window.location.reload(1);
  }, 5000);
}
}
