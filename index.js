let mainFrame = document.getElementById("mainframe");

let buttonDiv = document.createElement("div");
buttonDiv.classList="flex-col m-5 border-2 border-solid w-80 h-20";
mainFrame.appendChild(buttonDiv);

let addBtn = document.createElement('button');
addBtn.innerText = "ADD";
addBtn.classList = "bg-blue-400 border-2 border-bg-blue-800 w-20 h-10 m-3";

let showBtn = document.createElement('button');
showBtn.innerText = "SHOW";
showBtn.classList = "bg-blue-400 border-2 border-blue-800 w-20 h-10 m-3";

buttonDiv.appendChild(addBtn);
buttonDiv.appendChild(showBtn);

let frame1 = document.createElement("div");
frame1.classList = "m-5 border-2 border-solid flex flex-row";
frame1.style.display = "none";

let inputBox = document.createElement("input");
inputBox.placeholder = "enter the task";
inputBox.classList = "bg-red-300 m-3 border-2 border-bg-green-300";

let descriptionBox = document.createElement("textarea");
descriptionBox.placeholder = "type description of task";
descriptionBox.classList = " bg-green-500 m-3 border-2 border-solid";

let addItem = document.createElement('button');
addItem.innerText = "ADD ITEM";
addItem.classList = "bg-blue-400 border-2 border-blue-800 w-20 h-10 m-3";

frame1.appendChild(inputBox);
frame1.appendChild(descriptionBox);
frame1.appendChild(addItem);

let frame2 = document.createElement("div");
frame2.classList = "m-5 border-2 border-solid bg-blue-200";
frame2.style.display = "none";

let frame2Btn = document.createElement("div");
frame2Btn.classList = "m-5 border-2 border- flex justify-center";

let search = document.createElement("button");
search.innerText = "search";
search.classList = "bg-blue-400 border-2 border-blue-800 w-20 h-10 m-3";

let searchInput = document.createElement("input");
searchInput.placeholder = "search the task";
searchInput.classList = "bg-blue-400 m-3 border-2 border-solid";

frame2Btn.appendChild(searchInput);
frame2Btn.appendChild(search);

let taskContainer = document.createElement("div");
taskContainer.classList = "m-3 border-2 border-solid";


let msgDiv = document.createElement("p");
msgDiv.innerText = "There is no task";
msgDiv.classList = "text-pink-500 m-5";

frame2.appendChild(frame2Btn);
frame2.appendChild(taskContainer);
frame2.appendChild(msgDiv);

addBtn.addEventListener("click", ()=>{
    mainFrame.appendChild(frame1);
    frame1.style.display = "block";
    frame2.style.display = "none";
    if (showBtn.innerText == "HIDE") 
    {
        showBtn.innerText = "SHOW";
    }
});

function showHide() 
{
    if (frame2.style.display == "none") 
    {
        frame2.style.display = "block";
        frame1.style.display = "none";
        showBtn.innerText = "HIDE";
    } 
    else 
    {
        frame2.style.display = "none";
        frame1.style.display = "block";
        showBtn.innerText = "SHOW";
    }
}

showBtn.addEventListener("click", showHide);


let tasksArray = JSON.parse(localStorage.getItem("TASKS"));
if (tasksArray == null) {
    tasksArray = [];
}
else{
    taskFromLocalStorage(tasksArray);
}

addItem.addEventListener("click", ()=>{
    let data = inputBox.value;
    let description_data = descriptionBox.value;
    let todayDate = new Date().toLocaleString();

    if (data == "" || description_data == "") 
    {
        alert("task or description can't be empty");
        return;
    }

    showHide();

    let task = {
        taskName: data,
        taskDescription: description_data,
        taskDate: todayDate,
        taskId: new Date().getTime(),
        taskStatus: false
    };

    tasksArray.push(task);
    tasksArray.sort((task1,task2)=>task2.taskId-task1.taskId);
    saveToLocalStorage(tasksArray);

    msgDiv.style.display = "none";

    createTaskDiv(task, true);

    inputBox.value = "";
    descriptionBox.value = "";
});

function saveToLocalStorage(tasksArray) 
{
    /*tasksArray.push(task);
    console.log(tasksArray[0].taskId);
    console.log(tasksArray[0].taskDescription);*/
    localStorage.setItem("TASKS", JSON.stringify(tasksArray));
}

function taskFromLocalStorage(tasksArray) 
{
    if (tasksArray.length > 0) 
    {
        msgDiv.style.display = "none";
    }
    tasksArray.sort((task1, task2) => task2.taskId - task1.taskId);
    for (let i = 0; i < tasksArray.length; i++) 
    {
        createTaskDiv(tasksArray[i],false);
    }
}

function createTaskDiv(task, flag)
{
    let taskDiv = document.createElement("div");
    taskDiv.classList = " border-2 border-[#659287] bg-[#B1D3B9] m-3";

    let infoDiv = document.createElement("div");
    infoDiv.classList = "flex flex-col ";

    let taskName = document.createElement('h1');
    taskName.textContent = task.taskName;
    taskName.classList = "text-xl m-2";

    let description = document.createElement("p");
    description.innerText = task.taskDescription;
    description.classList = " border-2 m-2 bg-[#E6F2DD]  w-80 break-all truncate";

    let readmoreless = document.createElement('button');
    readmoreless.innerText = "readmore";
    readmoreless.style.color = "blue";
    readmoreless.classList = "self-start m-2";
    readmoreless.addEventListener('click', ()=>{
        description.classList.toggle("truncate");
        if(readmoreless.innerText == "readmore")
        {
            readmoreless.innerText = "readless";
        }
        else
        {
            readmoreless.innerText = "readmore";
        }
    });

    let date = document.createElement("p");
    date.innerText = task.taskDate;
    date.classList = "m-2";

    infoDiv.appendChild(taskName);
    infoDiv.appendChild(description);
    if (task.taskDescription.length >= 200) 
    {
        infoDiv.appendChild(readmoreless);
    }
    infoDiv.appendChild(date);


    let taskBtnDiv = document.createElement("div");
    taskBtnDiv.classList = "m-3"

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "DONE";
    doneBtn.classList = "bg-blue-400 border-2 border-blue-800 w-20 h-10 m-3"

    let editBtn = document.createElement("button");
    editBtn.innerText = "EDIT";
    editBtn.classList = "bg-blue-400 border-2 border-blue-800 w-20 h-10 m-3";

    let saveBtn = document.createElement("button");
    saveBtn.innerText = "SAVE";
    saveBtn.classList = "bg-blue-400 border-2 border-blue-800 w-20 h-10 m-3";
    saveBtn.style.display = "none";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.classList = "bg-blue-400 border-2 border-blue-800 w-20 h-10 m-3"


    taskBtnDiv.appendChild(doneBtn);
    taskBtnDiv.appendChild(editBtn);
    taskBtnDiv.appendChild(saveBtn);
    taskBtnDiv.appendChild(deleteBtn);

    doneBtn.addEventListener("click", ()=>{

        for(let i = 0; i <tasksArray.length; i++)
        {
            if(tasksArray[i].taskId == task.taskId)
            {
                if(tasksArray[i].taskStatus == true)
                {
                    tasksArray[i].taskStatus = false;
                }
                else
                {
                    tasksArray[i].taskStatus = true;
                }
            }
        }

        saveToLocalStorage(tasksArray);
        if(task.taskStatus == true)
        {
            doneBtn.innerText = "UNDONE";
            infoDiv.classList = "bg-yellow-300"
        }
        else
        {
            doneBtn.innerText = "DONE";
            infoDiv.classList.remove("bg-yellow-300");
        }
    })
    if(task.taskStatus == true)
    {
        doneBtn.innerText = "UNDONE";
        infoDiv.classList = "bg-yellow-300";
    }
    else
    {
        doneBtn.innerText = "DONE";
        infoDiv.classList.remove("bg-yellow-300");
    }

    let newInput = document.createElement("input");
    let newDescription = document.createElement("textarea");
    editBtn.addEventListener("click",()=>{
        saveBtn.style.display = "inline-block";
        editBtn.style.display = "none";
        infoDiv.innerHTML = "";

        newInput.value = task.taskName;
        newInput.classList = "border-2";
        
        newDescription.value = task.taskDescription;
        newDescription.classList = "border-2";

        infoDiv.appendChild(newInput);
        infoDiv.appendChild(newDescription);
    })

    saveBtn.addEventListener("click", ()=>{
        task.taskName = newInput.value;
        task.taskDescription = newDescription.value;
        task.taskDate = new Date().toLocaleString();

        let index = tasksArray.findIndex((t) => t.taskId == task.taskId);
        tasksArray[index] = task;
        localStorage.setItem("TASKS", JSON.stringify(tasksArray));

        infoDiv.innerHTML = "";
        taskName.textContent = task.taskName;
        description.innerText = task.taskDescription;
        date.innerText = task.taskDate;
        infoDiv.appendChild(taskName);
        infoDiv.appendChild(description);
        if (task.taskDescription.length >= 50) 
            {
                infoDiv.appendChild(readmoreless);
            }
        infoDiv.appendChild(date);

        saveBtn.style.display = "none";
        editBtn.style.display = "inline-block";
    })

    deleteBtn.addEventListener("click", ()=>{
        tasksArray = tasksArray.filter((t) => t.taskId != task.taskId);
        localStorage.setItem("TASKS", JSON.stringify(tasksArray));
        taskDiv.remove();
    })
 
    taskDiv.appendChild(infoDiv);
    taskDiv.appendChild(taskBtnDiv);
    
    

    if(flag)
    {
        taskContainer.prepend(taskDiv)
    }
    else
    {
        taskContainer.appendChild(taskDiv);
    }
}

search.addEventListener("click", ()=>{
    let searchValue = searchInput.value.toLocaleLowerCase().trim();
    if(searchValue == "")
    {
        alert("empty search not allowed");
        return;
    }
    taskContainer.innerHTML = "";
    for(let i=0; i < tasksArray.length; i++)
    {
        let taskName = tasksArray[i].taskName.toLocaleLowerCase().trim();
        if(taskName == searchValue||taskName.includes(searchValue))
        {
            createTaskDiv(tasksArray[i], false);
        }
        else
        {
            noTaskMsg.style.display = "block";
        }
    }
    if(taskContainer.childElementCount == 0)
    {
        noTaskMsg.style.display == "block";
    }
    searchInput.value = ""

});
mainFrame.appendChild(frame2);