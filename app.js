const btnEl= document.getElementById("btn")
const appEl = document.getElementById("app")

function createNoteEl(id, content){
    console.log(id,content)
    const element = document.createElement("textarea")
    element.classList.add("note")
    element.placeholder = "empty note"
    element.value = content

    element.addEventListener("dblclick", function(){
        const warning = confirm("Do You Really Want To Delete This Note?")
        if(warning){
            deleteNote(id,element)
        }
    })
    return element
}
function deleteNote(){

}

function addNote(){
    // console.log("clicked")
    const noteObj = {
        id: Math.floor(Math.random()*1100),
        content: ""
    }
    // console.log(noteObj)
    
    const noteEl = createNoteEl(noteObj.id, noteObj.content)
    appEl.insertBefore(noteEl, btnEl)
}

btnEl.addEventListener("click", addNote)

