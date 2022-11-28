const input = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const groceryList = document.querySelector(".grocery-list");
const alert = document.querySelector(".alert");
const groceryContainer = document.querySelector(".grocery-container");
const clearBtn = document.querySelector(".clear-btn");

let edit = false;
// To pick the element seperately to edit
let curTarget;

let arr = [];

const fetchLocalStorage = () => {
  let items = localStorage.getItem("items");
  console.log(items);
  if (items) {
    items = JSON.parse(items);
    arr = [...items];
  } else {
    arr = [];
  }

  arr.forEach((item) => {
    createElement(item);
  });
};

const addToLocalStorage = (item) => {
  console.log(arr);
  arr.push(item);
  window.localStorage.setItem("items", JSON.stringify(arr));
};

const editLocalStorage = (item, value) => {
  const items = JSON.parse(localStorage.getItem("items"));

  console.log(items);
  console.log(item);
  const editedItems = items.map((ele) => {
    console.log(ele);
    console.log(item.dataset);
    console.log(ele.id === item.dataset.id);
    if (ele.id === item.dataset.id) {
      return { ...ele, item: value };
    }
    return ele;
  });
  localStorage.setItem("items", JSON.stringify(editedItems));
};

const deleteFromLocalStorage = (targetItem) => {
  const items = JSON.parse(localStorage.getItem("items"));
  const newItems = items.filter((item) => {
    return item.id !== targetItem.dataset.id;
  });
  localStorage.setItem("items", JSON.stringify(newItems));
};

const editHandler = (e) => {
  console.log("called");
  const target = e.currentTarget.parentElement.parentElement;
  input.value = target.firstElementChild.textContent;

  console.log(target.firstElementChild);
  edit = true;
  submitBtn.textContent = "Edit";
  curTarget = target;
};

const deleteHandler = (e) => {
  const target = e.currentTarget.parentElement.parentElement;
  console.log(target);
  // const itemName =
  //   e.currentTarget.parentElement.previousElementSibling.textContent;
  deleteFromLocalStorage(target);
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

  const id = new Date().getTime().toString();
  const element = { id, item: input.value };
  if (!edit) {
    createElement(element);

    addToLocalStorage(element);
    input.value = "";
    alertFn("alert-success", "Item added Successfully");
  } else {
    editLocalStorage(curTarget, input.value);
    curTarget.firstElementChild.textContent = input.value;
    input.value = "";
    edit = false;

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
  let attr = document.createAttribute("data-id");
  attr.value = item.id;
  article.setAttributeNode(attr);
  article.innerHTML = `<p class="title">${item.item}</p>
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
  const editBtn = document.querySelectorAll(".edit-btn");
  const deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((btn) => btn.addEventListener("click", deleteHandler));
  editBtn.forEach((btn) => btn.addEventListener("click", editHandler));
}
