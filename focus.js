//document.body.style.border = "5px solid red";
//document.body.h2.style.color = "red !important";
//document.body.innerHTML = "Hi";

var x = document.createElement("h1");                        // Create a <p> element
var t = document.createTextNode("TASK AT HAND");    // Create a text node
x.appendChild(t);                                           // Append the text to <p>
//document.body.appendChild(x);
//t.style.cssText('color:red;');

x.setAttribute("style","text-align:center; color:red; background-color:black;");
document.body.prepend(x);
