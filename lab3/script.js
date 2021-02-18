function newElement() {
  var li = document.createElement("li");
  
  var inputText = document.getElementById("input").value;
  if (inputText == "") {
    alert("Task should not be empty!");
    return;
  }

  var t = document.createTextNode(inputText);
  var img = document.createElement("img");
  img.src = "trash.png";
  img.className = "trash-icon";
 
  li.appendChild(t);
  li.appendChild(img);
  
  li.className = "undone li";
  li.onclick = function isDone() {
    if (li.className == "undone li") {
      li.className = "done li";
    } else {
      li.className = "undone li";
    }
  }
  
  img.onclick = function deleteTask() {
    var liParent = this.parentElement;
    liParent.remove();
  }
  
  document.getElementById("list").appendChild(li);
  document.getElementById("input").value = "";
}
  
  
  
  