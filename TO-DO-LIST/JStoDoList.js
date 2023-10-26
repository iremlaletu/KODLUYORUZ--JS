let list = document.querySelector("#list")
let task = document.querySelector("#task")
let localArray = []

// for trash icon for each li
const cancel = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>`


getLocalStorage()

function newElement() {
    if (task.value != "") {
        createElement(task.value)
        setLocalStorage(task.value)
        task.value = ""
        $(".success").toast('show')
    } else {
        $(".error").toast('show')
    }
}

function createElement(value) {
    let liDOM = document.createElement("li")
    let btnDOM = document.createElement("span")
    btnDOM.classList.add("close")
    btnDOM.innerHTML = cancel
    btnDOM.setAttribute("onclick", "deleteElement(this)")
    liDOM.innerHTML = value
    liDOM.setAttribute("onclick", "completeElement(this)")
    liDOM.append(btnDOM) // append the trash icon and list item to the list
    list.append(liDOM)
}

function completeElement(link) {
    if (link.className == "checked") {
        link.classList.remove("checked")
    } else {
        link.classList.add("checked")
    }
}

// for local storage start
function deleteElement(link) {
    link.parentNode.remove()
    setLocalArray()
    let parent = link.parentNode.innerHTML
    let parentSplit = parent.split("<")
    localArray.forEach((rm, index) =>{
        if(rm == parentSplit[0]){
            console.log(`${rm} deleted`)
            localArray.splice(index, 1);
        }
    })
    localStorage.setItem("localLi", JSON.stringify(localArray)); 
}

function setLocalArray() {
    if(localStorage.getItem("localLi") === null){
        localArray = []
    }else{
        localArray = JSON.parse(localStorage.getItem("localLi"))
    }
}

function setLocalStorage(value){
    setLocalArray()
    localArray.push(value)
    localStorage.setItem("localLi", JSON.stringify(localArray))
}

function getLocalStorage () {
    setLocalArray()
    if(localArray){
        console.log("in Local Storage")
        localArray.forEach(value =>{
            createElement(value)
        })
    }
}