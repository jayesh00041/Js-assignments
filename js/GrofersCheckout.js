let prices = document.querySelectorAll("td[data-ns-test='price']");
let total = 0;
prices.forEach(function(element){
    total+=parseInt(element.innerHTML);
});
console.log(total);
let tr = document.createElement('tr');
tr.innerHTML='<td></td><td></td><td id="grandTotal">'+total+'</td>';
let tble = document.getElementsByTagName('table')[0];
tble.appendChild(tr);
// document.getElementById("total").innerHTML=total;