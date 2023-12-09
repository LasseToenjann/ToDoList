"use strict"
function newpoint(newtext,newdiv){

    let newEdit = document.createElement("button")
    newEdit.innerHTML = "EDIT"

    newEdit.onclick = function() {
        edit(this,newEl,newdiv)
    }

    newEdit.className = "newEdit"
    newdiv.appendChild(newEdit)


    let newEl = document.createElement("h2")
    newEl.innerHTML = newtext.value

    newEl.className = "newElement"
    newdiv.appendChild(newEl)


    let newDel = document.createElement("button")
    newDel.innerHTML = "DEL"

    newDel.onclick = function() {
        del(this,newEdit,newEl,newdiv)
    }

    newDel.className = "newDelete"
    newdiv.appendChild(newDel)

    newtext.value = "";
}

function del(newEdit,newEl,newDel,newdiv){
    let empty = document.createElement("p")
    empty.id = "empty"
    newdiv.replaceChild(empty,newEl)
    newdiv.replaceChild(empty,newDel)
    newdiv.replaceChild(empty,newEdit)
}

function edit(newEdit,newEl,newdiv){
    let editInput = document.createElement("input")
    editInput.type = "text"
    editInput.value = newEl.innerHTML
    editInput.className = "editInput"

    let saveChange = document.createElement("button")
    saveChange.innerHTML = "SAVE"

    saveChange.onclick = function() {
        saveChange(this,newEdit,newEl,newdiv)
    }

    saveChange.className = "newEdit"

    newdiv.replaceChild(editInput,newEl)
    newdiv.replaceChild(saveChange,newEdit)
}

function saveChange(){

}