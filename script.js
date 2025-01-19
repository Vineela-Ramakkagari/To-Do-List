const input = document.getElementById("input-box");
const tasks = document.getElementById("tasks");

function addTask() {
    if (input.value === '') {
        alert("Please enter a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        let i = document.createElement("i");
        i.classList.add("fa", "fa-times-circle-o");
        li.appendChild(i);
    }
    input.value = "";
}

tasks.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "I") {
        e.target.parentElement.remove();
    }
});