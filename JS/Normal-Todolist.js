 var addtodobutton = document.getElementById("addtodo");
        var todocontainer = document.getElementById('toDocontainer');
        var inputField = document.getElementById('inputField');
        var inputValue = document.getElementById("inputField").value;

        // ------------------------Add Function---------------------------------

        function addtask() {
            if (inputValue === "") {
                inputField.style.border = "1px solid green";
            }
            else {
                inputField.style.border = "1px solid green";
            }
            // ------------------------Create Task---------------------------------

            var div = document.createElement('div')
            div.innerText = inputField.value;
            todocontainer.appendChild(div);
            inputField.value = "";
        }

        addtodobutton.addEventListener('click', () => {
            addtask();
        })

        // ------------------------Remove All Task---------------------------------

        function deletetask() {
            var task = document.getElementById("toDocontainer");
            task.innerHTML = "";
        }
        // -----------------------Enter Press Add Task--------------------------------
        document.getElementById("inputField").addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                addtask();
            }
        });
        //-------------------------The End-------------------------------


    