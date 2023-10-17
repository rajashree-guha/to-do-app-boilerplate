// input tag 
var inputText = document.getElementById("input")

//  Add button tag 
var subBtn = document.getElementById("button")

// Todo list 
var todoListTag = document.getElementById("todolist")

// array to store all todo elements , initially empty 

// if(localStorage.getItem("todoArr"!=null)){
//     todoArray=JSON.parse(localStorage.getItem('todoArr'));
// }
// else{
//     todoArr=[];
// }

var todoArr = JSON.parse(localStorage.getItem("todoArr")) || []

display();

// When Add Button is clicked
subBtn.addEventListener("click", addItemToArray)

// If Input is on Focus and Enter is clicked addItemToArray should be called to Add element to array 
inputText.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        addItemToArray()
    }

})

function addItemToArray(event) {

    //   push the value to Array if its not an empty string     
    if (inputText.value != "") {
        // push the value to Array 
        todoArr.push(inputText.value)
        localStorage.setItem("todoArr", JSON.stringify(todoArr))
    }
    // reset the value to empty string 
    inputText.value = ""

    display()
}

function display() {
    // clear out previous old ones everytime we add one item to array and display it 
    todoListTag.innerHTML = "";

    todoArr.map((curr,i) => {

        console.log(todoArr);
        console.log(curr);
        //  Structure of li tag    
        var listItem = `<li id="item${i}">
        <div>${curr}</div>
        <div>
            <span onclick="deleteItem(${i})">&times;</span>
            <span>|</span>
            <span onclick="editItem(${i})">Edit</span>
        </div>
    </li>`

        // insert it inside <ul id="todolist"> 
        todoListTag.innerHTML += listItem;
    });
}

function deleteItem(index) {
    todoArr.splice(index, 1)
    localStorage.setItem("todoArr", JSON.stringify(todoArr))
    display();
}

function editItem(index) {
    var newValue = prompt("Pls Edit");

    todoArr.splice(index, 1, newValue)
    localStorage.setItem("todoArr", JSON.stringify(todoArr))
    display();
}

// reset the todo list 
document.getElementById("reset").addEventListener("click", () => {
    todoArr = [];
    localStorage.setItem("todoArr", JSON.stringify(todoArr))
    display();
})


