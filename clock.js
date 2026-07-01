let mainFrame = document.getElementById("mainframe");
mainFrame.classList="border-2 border-solid bg-blue-100 m-auto w-100 h-60 mt-3 flex-col p-5";

let div1=document.createElement("div");
div1.classList="border-3 border-solid m-auto p-5 w-50 h-20";
mainFrame.appendChild(div1);

let time=document.createElement("div");
setInterval(()=>{
time.innerText = new Date().toLocaleTimeString();
time.classList="border-2 border-solid h-8 w-25 pb-2 pl-2 justify-self-center";
},1000);
div1.appendChild(time);

let div2=document.createElement("div");
div2.classList = "border-3 border-solid m-auto mt-5 p-5 pb-23w-70 h-25 flex flex-row";

mainFrame.appendChild(div2);

let day = document.createElement("div");
day.classList="border-2 border-solid h-8 ml-8 pl-4 mt-3 w-25";
day.innerText = new Date().toLocaleDateString('en-US', { weekday: 'long' });
div2.appendChild(day);

let date = document.createElement("div");
date.classList="border-2 border-solid h-8 w-25 ml-10 mt-3 pl-3";
date.innerText=new Date().toLocaleDateString();
div2.appendChild(date);

