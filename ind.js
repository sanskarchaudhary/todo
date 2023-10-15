const buttonClicked = document.getElementById('btn');
const inputFieldText = document.getElementById('inputValue');
const textField = document.getElementById('textColl');

var taskStore = [];
buttonClicked.addEventListener("click",()=>{
    addTask();
    addToLocalStorage();
})

// lets make a global array;

// this is the function of adding the task to the new element field
function addTask() {
    var taskText = inputFieldText.value.trim(); // Get the input value and trim any leading/trailing whitespace
    if (taskText !== "") {

        //  lets create a container
        const taskContainer = document.createElement("div");
        // Create a new <p> element for the task and append it to the textField
        const taskElement = document.createElement("span");
        taskElement.textContent = taskText;

        // here since i have only task in the textcontent so its shows me the task only
        taskStore.push(taskElement.textContent);
        taskElement.classList.add("text-area")
        taskContainer.appendChild(taskElement);
        console.log(taskStore);

        //  lets write a function to have "✓" as a button
        const checkmarkButton = document.createElement("button");
        checkmarkButton.textContent = "✓";
        checkmarkButton.classList.add("symbol"); // Add a class for styling
        checkmarkButton.addEventListener("click",()=>{
            taskElement.classList.toggle("checked");
            console.log("Task completed!");
        })

        // but when i am appending the child to taskElement it includes check sign also
        taskContainer.appendChild(checkmarkButton);

        // Create a cross symbol (✗) and append it to the task container
        const crossButton = document.createElement("button");
        crossButton.textContent = "✗";
        
        // this is for that i have added class for css
        crossButton.classList.add("symbol"); 
        // this is the function so that i can deletet the task
       crossButton.addEventListener("click",()=>{
        taskStore.splice(taskStore.indexOf(taskElement.textContent),1);
        localStorage.removeItem("task",taskElement.taskContent);
        // console.log(taskElement.textContent);
        taskContainer.remove();
        localStorage.setItem("task",JSON.stringify(taskStore));
        console.log(taskStore);
        console.log("Task Removed");
       })

        taskContainer.appendChild(crossButton);

        // Append the task container to the textField
        textField.appendChild(taskContainer);

        // Clear the input field
        inputFieldText.value = "";
       
    }
    else
    {
        alert('Task box cannot be empty.');
    }
}
function addToLocalStorage()
{
    localStorage.setItem("task",JSON.stringify(taskStore));
}
