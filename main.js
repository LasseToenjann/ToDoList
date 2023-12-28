"use strict";

function newpoint() {
    let newtext = document.getElementById("newtext");
    let newdiv = document.getElementById("newDiv");

    let newEdit = document.createElement("button");
    newEdit.innerHTML = "EDIT";
    newEdit.className = "newEdit";
    newEdit.onclick = function() {
        edit(newEdit, newEl, newdiv);
    };

    let newEl = document.createElement("h2");
    newEl.innerHTML = newtext.value;
    newEl.id = "newElement";

    let newDel = document.createElement("button");
    newDel.innerHTML = "DEL";
    newDel.className = "newDelete";
    newDel.onclick = function() {
        del(newdiv);
    };

    newdiv.appendChild(newEdit);
    newdiv.appendChild(newEl);
    newdiv.appendChild(newDel);

    newtext.value = "";
}

function del(newdiv) {
    newdiv.innerHTML = '';
}

function edit(newEdit, newEl, newdiv) {
    let editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = newEl.innerHTML;
    editInput.className = "editInput";

    let saveChange = document.createElement("button");
    saveChange.innerHTML = "SAVE";
    saveChange.className = "newEdit";
    saveChange.onclick = function() {
        saveEdit(newEl, editInput, newdiv, newEdit, saveChange);
    };

    newdiv.replaceChild(editInput, newEl);
    newdiv.replaceChild(saveChange, newEdit);
}

function saveEdit(newEl, editInput, newdiv, newEdit, saveChange) {
    newEl.innerHTML = editInput.value;

    newdiv.replaceChild(newEl, editInput);
    newdiv.replaceChild(newEdit, saveChange);
}
