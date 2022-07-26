var button=document.getElementsByTagName("button")[0];
var input=document.getElementById("user");
var ul=document.querySelector("ul");


button.addEventListener("click",function()
{
    if(input.value.length>0){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value="";

}
})

button.addEventListener("keypress",function(event)
{
    if(input.value.length>0 && event.keyCode===13){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value="";

}
})