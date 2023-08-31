let input = document.getElementById("userTask");
let addbtn = document.getElementById("createBtn");
let tasks = document.querySelector(".userTasks");
let taskArray = [];
let editItemId = 0;
let count = 0;

let passingData = () => {
  let item = input.value.trim();
  if (item == "" || item == " ") {
    alert("Please enter a valid task");
  } else {
    addTask(item);
    input.value = "";
  }
};

function addTask(item) {
  let obj = {};
  obj["id"] = count += 1;
  obj["value"] = item;
  obj["check"] = false;
  taskArray.push(obj);
  createElement(obj);
}

function editItem(id) {
  console.log("Edit =========>", id);
  console.log("all tasks : ", taskArray);
  addbtn.style.display = "none";
  document.getElementById("editBtn").style.display = "block";
  taskArray.filter((ele) => {
    if (ele.id == id) {
      input.value = ele.value;
      editItemId = ele.id;
    }
  });
}

let editDataFromView = () => {
  let dataNodes = document.getElementsByClassName(`block${editItemId}`);
  taskArray.filter((ele) => {
    if (ele.id == editItemId) {
      ele.value = input.value;
    }
  });
  // console.log(dataNodes);
  dataNodes[0].childNodes[3].childNodes[1].innerHTML = input.value;
  // console.log(dataNodes[0].childNodes[3].childNodes[1]);
  addbtn.style.display = "block";
  document.getElementById("editBtn").style.display = "none";
  input.value = "";
};

function deleteItem(id) {
  document.querySelector(`.block${id}`).style.display = "none";
}

function createElement(data) {
  let newitem = document.createElement("div");
  newitem.classList.add("row");
  newitem.classList.add("my-3");
  newitem.classList.add(`block${data.id}`);
  let isChecked = data.check ? "checked" : "";
  let item = `
  <div class="col-sm-3 col-md-1 text-center">
        <input type="checkbox" id="inputCheckbox${data.id}" class="btn-check" ${isChecked}> 
        <label class="btn btn-outline-primary" for="inputCheckbox${data.id}">Done</label>
  </div>
  <div class="col-sm-9 col-md-9">
    <p id="taskDetail" class="text-center text-break text-capitalize fs-6" style="line-height: 2rem;">
      ${data.value}
    </p>
  </div>
  <div class="col-sm-12 col-md-2 text-center">
    <div class="btn-group" role="group" >
      <button type="button" class="btn btn-warning" onclick='editItem(${data.id})'>
        <i style="color: white; font-size: 18px;" class="fa-solid fa-square-pen"></i>
      </button>
      <button type="button" class="btn btn-danger" onclick='deleteItem(${data.id})'>
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>`;
  let task = "hello";
  newitem.innerHTML = item;
  console.log(newitem);
  tasks.appendChild(newitem);
}
