const lists = [];

    function todoList(){
        let textInput = document.getElementById("inputTodo").value;
        let createText = document.createTextNode(textInput);
        let createItem = document.createElement("li");
        createItem.appendChild(createText);
        document.getElementById("todoList").appendChild(createItem); 
}