let authFrame = document.getElementById("authframe");
let userId=document.createElement("input");
userId.classList = "border-2 border-red-500";
userId.placeholder = "enter User id";

let password = document.createElement("input");
password.classList = "border-2";
password.placeholder = "enter password";

let authButton = document.createElement("button");
authButton.innerText = "Submit";
authButton.addEventListener("click", ()=>{
  let id = userId.value;
  let pass = password.value;
  console.log(id, pass);
});
authFrame.appendChild(userId);
authFrame.appendChild(password);
authFrame.appendChild(authButton);

setLoggedInUserToLocalStorage({ userId:"asdf", password:"pqrstuv"});

let loggedInUser = getLoggedInUserFromLocalStorage();
if (!loggedInUser) 
{
  mainFrame.style.display = "none";
} 
else 
{
  authFrame.style.display = "none";
}
function getLoggedInUserFromLocalStorage() 
{
  let user = localStorage.getItem("loggedInUser");
  return JSON.parse(user);
}
function setLoggedInUserToLocalStorage(user) 
{
  localStorage.setItem("loggedInUser",JSON.stringify(user));
  return JSON.stringify(user);
}