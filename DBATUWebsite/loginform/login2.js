function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Sappu19"&& password=="2612")
{
    alert("login succesfully");
	window.open('project/index.html')
    return false;
}
else
{
    alert("login failed");
}


}