const addBtn = document.querySelector(".submit-btn");
const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

inputBox.addEventListener("click", () => {
  addBtn.style.display = "block";
});

function addTask() {
  if (inputBox.value == "") alert("Input something!!");
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    //ADD DELETE BUTTON
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveToLocalStorage();
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveToLocalStorage();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveToLocalStorage();
    }
  },
  false
);

// USING LOCAL STORAGE TO SAVE DATA
function saveToLocalStorage() {
  localStorage.setItem("listData", listContainer.innerHTML);
}

function showLocalStorageData() {
  listContainer.innerHTML = localStorage.getItem("listData");
}

showLocalStorageData();
