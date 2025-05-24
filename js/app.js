function addTask() {
  const input = document.getElementById("new-task");
  const taskName = input.value.trim();

  if (taskName === "") {
    alert("Please enter a task! 🐝");
    return;
  }

  const table = document.getElementById("tasks");
  const newRow = document.createElement("tr");

  const taskCell = document.createElement("td");
  taskCell.textContent = `📝 ${taskName}`;

  const statusCell = document.createElement("td");
  statusCell.textContent = "In-Progress";
  statusCell.style.color = "#FFA500"; 

 
  newRow.appendChild(taskCell);
  newRow.appendChild(statusCell);


  table.appendChild(newRow);

 
  input.value = "";

 
  newRow.style.opacity = 0;
  setTimeout(() => {
    newRow.style.transition = "opacity 0.5s ease-in";
    newRow.style.opacity = 1;
  }, 10);
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ما يرسل النموذج فعلياً

    alert("🌸 Thank you for reaching out!\nWe’ll get back to you as soon as possible.");

    form.reset(); // يفرّغ النموذج بعد الإرسال
  });
});

