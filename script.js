function remove(papa) {
papa.parentElement.parentElement.remove()
    
}
function like(coeur) {
    coeur.classList.toggle("changeToRed");
    
}
function checknumber(qty){
   var b = qty.value
   var x = qty.parentElement.parentElement.children[1].innerText;
    var w = parseInt(x);
    var z = b*w 
   let h = qty.parentElement.parentElement.children[3]
   h.innerText = (`${z} FCFA`)
  /* var t =document.getElementById("ttl").innerText ;
    var ttl = parseInt(t),ttl =0 ;
*/
boom()
}
function boom() {
    var xxx =document.getElementById("ttl")
    var sidi =document.getElementById("ttl1").innerText
    var j =parseInt(sidi)
     var rama =document.getElementById("ttl2").innerText
    var k =parseInt(rama)
     var ansou =document.getElementById("ttl3").innerText
    var l =parseInt(ansou)
    var total = 0
    total = j+k+l
    xxx.innerText=(`${total} fcfa`) ;
}