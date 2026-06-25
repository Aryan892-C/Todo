let mainFrame = document.getElementById("mainframe");
mainFrame.classList="flex flex-col border-3 border-green-400 "

let tasksArray=JSON.parse(localStorage.getItem("TASKS"));
if(tasksArray == null)
{
    tasksArray = [];
}

function saveToLocalStorage(task)
{
    tasksArray.push(task);
    localStorage.setItem("TASKS",JSON.stringify(tasksArray));
}
let addBtn = document.createElement('button');
addBtn.innerText = "ADD";
addBtn.classList = "bg-red border-2 border-solid";

let showBtn=document.createElement("div");
showBtn.innerText="SHOW";
showBtn.classList="bg-red-400 border-2 w-5 h-4 m-3"

let frame1 = document.createElement("div");
frame1.style.display = "none";
frame1.classList = "flex flex-col border-2 border-solid w-100 h-100 mt-3 bg-red-300";
frame1.style.display = "none";

let input_box = document.createElement("input");
input_box.id = "input_data";
input_box.type = "text";
input_box.placeholder = "Enter the task.";
input_box.classList = "border-2 border-solid mt-2 bg-green-300";

let task_description = document.createElement("textarea");
task_description.placeholder = "Task description.";
task_description.rows = 4;
task_description.classList = "border-2 border-solid w-90 mt-2";

let addItem = document.createElement("button");
addItem.innerText = "ADD ITEM";
addItem.classList = "border-2 border-solid mt-2";
mainFrame.appendChild(frame1);
frame1.appendChild(input_box);
frame1.appendChild(task_description);
frame1.appendChild(addItem);

let frame2 = document.createElement('div');
frame2.style.display = "none";
frame2.classList = "border-2 border-solid h-150 w-200 mt-3 bg-blue-200"
//ShowAndHideButton.addEventListener("click",showHideTasks());
frame2.style.display="none";

function task_window()
{
    if(frame2.style.display == "none")
    {
        frame2.style.display = "block";
        frame1.style.display = "none";
        showBtn.innerText = "HIDE";
    }
    else 
    {
        frame1.style.display = "block";
        frame2.style.display = "none";
        showBtn.innerText = "SHOW";

    }
}

addBtn.addEventListener('click', ()=>
{   
    mainFrame.appendChild(frame1);
    frame1.style.display = "block";
    frame2.style.display = "none";
    if(showBtn.innerText == "HIDE")
    {
        showBtn.innerText = "SHOW";
    }
});   
    
    showBtn.addEventListener("click",task_window());

    addItem.addEventListener('click', ()=>
    {
    task_window();
    let taskDiv = document.createElement("div");
    taskDiv.classList = " flex flex-col border-2 border-solid bg-pink-200 h-50";
    
    let data = input_box.value;
    let description_data = task_description.value;
    if(data == "" || description_data == "")
    {
        alert("task or description can't be empty");
        return;
    }
    let taskName = document.createElement('h1');
    taskName.textContent = data;
    taskName.classList = "text-xl";

    let description = document.createElement("div");
    description.innerText = description_data;
    description.classList = "bg-green-300 break-all truncate";

    let readmoreless = document.createElement('button');
    readmoreless.innerText = "readmore";
    readmoreless.style.color = "blue";
    readmoreless.addEventListener('click',()=>
    {
        description.classList.toggle("truncate");

        if(readmoreless.innerText == "readmore")
        {
             readmoreless.innerText = "readless";
        }
        else if(readmoreless.innerText == "readless")
        {
            readmoreless.innerText = "readmore";
        }
       
    });

    let editBtn=document.createElement("button");
    editBtn.innerText="✏️";
    editBtn.classList="basis-1/5 bg-pink-500";
    taskDiv.appendChild(editBtn);
    editBtn.addEventListener("click",()=>
    {
        frame1.style.display="block";
        frame2.style.display="none";
    });

    let removeBtn = document.createElement("button");
    removeBtn.innerText="🗑️";
    removeBtn.classList=" bg-red-400 basis-1/4";
    taskDiv.appendChild(removeBtn);
    removeBtn.addEventListener("click",()=>
    {
        taskDiv.remove();
    });
    let doneBtn = document.createElement("button");
    doneBtn.innerText="✅";
    doneBtn.classList="basis-1/4";
    taskDiv.appendChild(doneBtn);
    doneBtn.addEventListener("click",()=>
    {
        taskDiv.classList.toggle("line-through");
    });
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(description);
    if(description_data.length >= 200)
    {
         taskDiv.appendChild(readmoreless);
    }
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(removeBtn);
    taskDiv.appendChild(doneBtn);

    saveToLocalStorage(task);

    input_box.value = "";
    task_description.value = "";

    frame2.appendChild(taskDiv);

    
});
function createTaskDivs(tasksArray)
{
    for(let i=0;i<tasksArray.length;i++)
    {
        let taskDiv = document.createElement("div");
        taskDiv.classList = " flex flex-col border-2 border-solid bg-pink-200 h-50";
        let taskName = document.createElement('h1');
        taskName.textContent = data;
        taskName.classList = "text-xl";

        let description = document.createElement("div");
        description.innerText = description_data;
        description.classList = "bg-green-300 break-all truncate";

        let readmoreless = document.createElement('button');
        readmoreless.innerText = "readmore";
        readmoreless.style.color = "blue";
        readmoreless.addEventListener('click',()=>
        {
            description.classList.toggle("truncate");

            if(readmoreless.innerText == "readmore")
            {
                readmoreless.innerText = "readless";
            }
            else if(readmoreless.innerText == "readless")
            {
                readmoreless.innerText = "readmore";
            }
        });

        let editBtn=document.createElement("button");
        editBtn.innerText="✏️";
        editBtn.classList="basis-1/5 bg-pink-500";
        taskDiv.appendChild(editBtn);
        editBtn.addEventListener("click",()=>
        {
            frame1.style.display="block";
            frame2.style.display="none";
        });

        let removeBtn = document.createElement("button");
        removeBtn.innerText="🗑️";
        removeBtn.classList=" bg-red-400 basis-1/4";
        taskDiv.appendChild(removeBtn);
        removeBtn.addEventListener("click",()=>
        {
         taskDiv.remove();
        });
        let doneBtn = document.createElement("button");
        doneBtn.innerText="✅";
        doneBtn.classList="basis-1/4";
        taskDiv.appendChild(doneBtn);
        doneBtn.addEventListener("click",()=>
        {
            taskDiv.classList.toggle("line-through");
        });
        taskDiv.appendChild(taskName);
        taskDiv.appendChild(description);
        if(description_data.length >= 200)
        {
            taskDiv.appendChild(readmoreless);
        }
        taskDiv.appendChild(editBtn);
        taskDiv.appendChild(removeBtn);
        taskDiv.appendChild(doneBtn);
    }
}
mainFrame.appendChild(addBtn);
mainFrame.appendChild(showBtn);
createTaskDivs(tasksArray);
mainFrame.appendChild(frame2);
