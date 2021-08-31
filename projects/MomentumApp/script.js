/* TODOLIST */
const inputBox = document.querySelector(".inputField input")
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".todoList")
const deleteAllBtn = document.querySelector(".footer button")
const todobtn = document.querySelector("#todobtn")
const todocontainer = document.querySelector("#todo-container")
const todoclosebtn = document.querySelector("#todoclosebtn")
/* MAIN FOCUS SECTION */
const inputName = document.querySelector("#inputName");
const greetings = document.querySelector("#greeting");
const field2 = document.querySelector("#focus-inputField2");
const focusInput = document.querySelector("#focusInput");
const greetings2 = document.querySelector("#focusgreeting");
const yourFocus = document.querySelector("#yourfocus");
const yourName = document.querySelector("#yourname");



/* CLOCK */
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m;
    
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
}
showTime();
/* END CLOCK */

/* TODO LIST FUNCTIONS */
inputBox.onkeyup = ()=>{
    let userData = inputBox.value; //getting user entered value
    if(userData.trim() != 0){   //check if user values aren't only spaces
        addBtn.classList.add("active"); //activate the add button
    }else{
        addBtn.classList.remove("active");//deactivate addbutton
    }
}
showTasks()
    /* todolist add button function */
addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo")
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string to js object
    }
    listArr.push(userData); //pushing or adding userdata
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks()
    addBtn.classList.remove("active");
}
    /* rendering tasks to ul */
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo")
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string to js object
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length;
    if(listArr.length > 0){
        deleteAllBtn.classList.add("active");
    }else{
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = '';
    listArr.forEach((element,index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; >del</span></li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul
    inputBox.value = '';
}
    /* delete task function */
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    /* after removing update the local storage */
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks()
}
    /* delete all function */
deleteAllBtn.onclick = ()=>{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks()
}
/* TODOLIST END */

/* TODO TOGGLEBTN START */
todobtn.onclick = ()=>{
    if(todocontainer.classList.value == "active"){
        todocontainer.classList.remove("active");
        todobtn.classList.add("active");
        todobtn.innerHTML = "Todo";
    }else{
        todocontainer.classList.add("active");
        todobtn.classList.remove("active");
    }
}
/* TODO TOGGLEBTN END*/

/* TODOLIST CLOSE BTN */
todoclosebtn.onclick = ()=>{
    if(todocontainer.classList.value == "active"){
        todocontainer.classList.remove("active");
        todobtn.classList.add("active");
    }
}
/* TODOLIST CLOSE BTN END */

/* MAIN FOCUS START*/
    /* name input */
inputName.addEventListener('keypress', function(event){
    if(event.code === 'Enter'){
        if(inputName.value != ''){
            event.preventDefault();
            greetings.innerHTML = "Hey <span id=\"yourname\">" + inputName.value + "</span>, have a great day!";
            if(field2.classList.value === ''){
                field2.classList.add('active');
            }
            inputName.classList.add("inactive");
        }
    }
})
    /* focus input */
field2.addEventListener('keypress', function(event){
    if(event.code === 'Enter'){
        if(focusInput.value != ''){
            event.preventDefault();
            greetings2.innerHTML = "Your main focus today is: <span id=\"yourfocus\">" + focusInput.value +"</span>";
            if(focusInput.classList.value === ''){
                focusInput.classList.add("inactive");
            }
            if(todobtn.classList.value == ''){
                todobtn.classList.add('active');
            }
        }
    }
})
/* MAIN FOCUS END */

/* QUOTE GENERATOR */
    const quotes = [
        {
            quote: `Strive not to be a success, but rather to be of value.`,
            author: `- Albert Einstein`
        },
        {
            quote: `Have the courage to follow your heart and intuition. They somehow know what you truly want to become.`,
            author: `- Steve Jobs`
        },
        {
            quote:`The only failure is not to try.`,
            author: `- Georgy Clooney`
        }
    ]

    const newQuote = document.getElementById("newQuote");
    const author = document.querySelector(".author");
    const quote = document.querySelector(".quote");
    const editQuote = document.getElementById("editQuote");

    newQuote.addEventListener('click', ()=>{
        let random = Math.floor(Math.random() * quotes.length);

        quote.innerHTML = quotes[random].quote;
        author.innerHTML = quotes[random].author;
        author.style.display = "block";
    })

    editQuote.addEventListener('click', ()=>{
        author.style.display = 'none';
        quote.setAttribute('contentEditable', true);
        
        quote.addEventListener('keypress', function(event){
            if(event.code === 'Enter'){
                quote.setAttribute('contentEditable', false);
            }
        })
    })

/* QUOTE GENERATOR END */