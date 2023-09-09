let idCounter = 0;

userInput.addEventListener('submit', (event) =>{
    event.preventDefault();
    addTask();
});

let addTask = ()=> {
    idCounter++;
    list.innerHTML += ′
    <div class="task-container" id="${idCounter}">
      <label>
        <input type="checkbox" />
        Tarea 1
      </label>
      <img src="./images/borrar.png" class="closeBtn">
    </div>
  </div>
    ′
};