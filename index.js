let todos = [];

const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const countDisplay = document.getElementById("count");

function render() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", function () {
      todos.splice(index, 1);
      render();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  countDisplay.textContent = "Total: " + todos.length;
}

addBtn.addEventListener("click", function () {
  todos.push(input.value);
  input.value = "";
  render();
});