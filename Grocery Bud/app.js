const input = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const groceryList = document.querySelector(".grocery-list");
const alert = document.querySelector(".alert");
const groceryContainer = document.querySelector(".grocery-container");
const clearBtn = document.querySelector(".clear-btn");

let item;
let edit = false;
let curTarget;

let arr = [];

const fetchLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem("items"));
  console.log(items);
  arr = [...items];
  console.log(arr);

  items?.forEach((item) => {
    createElement(item);
  });
};

const addToLocalStorage = (item) => {
  arr.push(item);
  window.localStorage.setItem("items", JSON.stringify(arr));
};

const editLocalStorage = (item, value) => {
  const items = JSON.parse(localStorage.getItem("items"));

  console.log(items);
  console.log(item);
  const editedItems = items.map((ele) => {
    console.log(ele);
    console.log(ele.toLowerCase() === item.toLowerCase());
    if (ele.toLowerCase() === item.toLowerCase()) {
      return value;
    }
    return ele;
  });
  localStorage.setItem("items", JSON.stringify(editedItems));
};

const deleteFromLocalStorage = (itemName) => {
  const items = JSON.parse(localStorage.getItem("items"));
  const newItems = items.filter((item) => item !== itemName);
  localStorage.setItem("items", JSON.stringify(newItems));
};

input.addEventListener("keyup", function (e) {
  console.log(this.value);
  item = this.value;
});

const editHandler = (e) => {
  console.log("called");
  const target = e.currentTarget.parentElement.parentElement.firstElementChild;
  input.value = target.textContent;

  console.log(target);
  edit = true;
  submitBtn.textContent = "Edit";
  //   addHandler(e, target);
  curTarget = target;
};

const deleteHandler = (e) => {
  const target = e.currentTarget.parentElement.parentElement;
  const itemName =
    e.currentTarget.parentElement.previousElementSibling.textContent;
  deleteFromLocalStorage(itemName);
  target.remove();
  if (groceryList.children.length === 0)
    groceryContainer.classList.remove("show-container");

  alertFn("alert-danger", "Item removed");
};

const addHandler = (e) => {
  e.preventDefault();
  if (!input.value) {
    alertFn("alert-danger", "Please enter an item");
    return;
  }
  if (!edit) {
    createElement(item);
    // console.log(editBtn);
    addToLocalStorage(item);
    input.value = "";
    alertFn("alert-success", "Item added Successfully");
  } else {
    editLocalStorage(curTarget.textContent, input.value);
    curTarget.textContent = input.value;
    input.value = "";
    edit = false;
    console.log(curTarget);
    alertFn("alert-success", "Value Changed");
  }

  submitBtn.textContent = "Add";
};

submitBtn.addEventListener("click", addHandler);

clearBtn.addEventListener("click", function () {
  groceryContainer.classList.remove("show-container");
  groceryList.innerHTML = "";
  alertFn("alert-danger", "Empty List");
  localStorage.setItem("items", []);
});

function alertFn(css, msg) {
  alert.textContent = msg;
  alert.classList.add(css);
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(css);
  }, 1000);
}

fetchLocalStorage();

function createElement(item) {
  const article = document.createElement("article");
  article.classList.add("grocery-item");
  article.innerHTML = `<p class="title">${item}</p>
                        <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                        </div>`;
  groceryList.appendChild(article);
  groceryContainer.classList.add("show-container");
  //   console.log(groceryList);
  const editBtn = document.querySelectorAll(".edit-btn");
  const deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((btn) => btn.addEventListener("click", deleteHandler));
  editBtn.forEach((btn) => btn.addEventListener("click", editHandler));
}
