const data=[{
    "category":"Work",
    "subcategory":"project",
    "duration":"12days",
    "task":"Develop a products"
},
{
    "category":"study",
    "subcategory":"jsx-project",
    "duration":"2days",
    "task":"Develop a products"
},
{
    "category":"Exercise",
    "subcategory":"project",
    "duration":"10days",
    "task":"Develop a products"
},
{
    "category": "Work",
    "subcategory": "training",
    "duration": "02:55:45",
    "task": "Attend webinar"
},
{
    "category": "Leisure",
    "subcategory": "gaming",
    "duration": "03:30:10",
    "task": "Play video games"
},
{
    "category": "Exercise",
    "subcategory": "yoga",
    "duration": "01:10:25",
    "task": "Morning yoga routine"
},
{
    "category": "Study",
    "subcategory": "reading",
    "duration": "02:45:40",
    "task": "Read research papers"
},
{
    "category": "Study",
    "subcategory": "jsx-project",
    "duration": "2days",
    "task": "Develop a products"
}
]
var upindex;
function populateTable(data){
const tbody = document.getElementById('tbdisp').getElementsByTagName('tbody')[0];
tbody.innerHTML="";
data.forEach((ele) => {
    const row = tbody.insertRow();
    for (const key in ele) {
        const cl = row.insertCell();
        cl.textContent = ele[key];
    }
        //Buttons
        const dbutton = document.createElement("button");
        dbutton.textContent = "Delete";
        dbutton.style.backgroundColor = "Red"
        dbutton.style.width = "100px"
        dbutton.style.borderRadius = "20px"
        dbutton.style.padding = "5px"
        dbutton.addEventListener("click", () => {
            let index = data.indexOf(ele);
            data.splice(index, 1);
            populateTable(data);
        });
        row.insertCell().appendChild(dbutton)

        const ebutton = document.createElement("button");
        ebutton.textContent = "Edit";
        ebutton.style.backgroundColor = "Green"
        ebutton.style.width = "100px"
        ebutton.style.borderRadius = "20px"
        ebutton.style.padding = "5px"
        ebutton.addEventListener("click", () => {
            upindex = data.indexOf(ele);
            var upobj = data[upindex];
            document.getElementById("category").value = upobj["category"]
            document.getElementById("subcategory").value = upobj["subcategory"];
            document.getElementById("timer").value = upobj["duration"];
            document.getElementById("task").value = upobj["task"];
        });
        row.insertCell().appendChild(ebutton);

    });
}
populateTable(data);

// Update
document.getElementById("up-btn").addEventListener("click",function(event){
    event.preventDefault();
    const cat = document.getElementById("category").value;
    const subcat = document.getElementById("subcategory").value;
    const ta = document.getElementById("task").value;
    const du = document.getElementById("timer").value;
    const upobj = {
        "category": cat,
        "subcategory": subcat,
        "duration": du,
        "task": ta
    } 
    data[upindex] = upobj;
    populateTable(data);
    document.getElementById("category").value = "";
    document.getElementById("subcategory").value = "";
    document.getElementById("task").value = "";
    document.getElementById("timer").value = "";

//populateTable(data);
});


//filter
    
    // console.log(document.getElementById("drop"));
    document.getElementById("drop").addEventListener("change", function () {
        var val = this.value;
        const filteredData = data.filter(obj => obj.category === val);
        console.log(filteredData);
        const tableBody = document.getElementById('tbdisp').getElementsByTagName('tbody')[0];
        populateTable(filteredData);
        console.log(tableBody);
    
    });

/*crud Operations */
//create
document.getElementById("add-btn").addEventListener("click",function(event){
    event.preventDefault();
const cat = document.querySelector("#category").value;
const sub = document.querySelector("#subcategory").value;
const tsk = document.querySelector("#task").value;
var duration
const arr={
    "category":cat,
    "subcategory":sub,
    "duration":duration,
    "task":tsk
}
data.push(arr);
populateTable(data);
});

//Timer
let seconds = 0;
let minutes = 0;
let hours = 0;
let IsRunning = false;
let interval;

document.getElementById("start").addEventListener("click", function(event) {
    event.preventDefault();
    if (!IsRunning) {
        IsRunning = true;
        document.getElementById("start").innerHTML = 'Stop';
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            let ftime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            document.getElementById("timer").innerText = ftime;
        }, 1000);
    } else {
        IsRunning = false;
        let ftime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        document.getElementById("timer").innerText = ftime;
        clearInterval(interval);
        document.getElementById("start").innerHTML = "Start";
    }
});

// start(); // Start the timer

function resetTimer() {
    // debugger;
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(interval);
    document.getElementById("start").innerHTML = "Start";
    let fTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    document.getElementById("timer").value = fTime; 
    IsRunning = false; 
}
