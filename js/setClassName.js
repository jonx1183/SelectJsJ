console.log("Jeg er i setClassName")

let inpElementName = document.getElementById("elementName")
let inpStyleName = document.getElementById("styleName")
let pbSetClassName = document.getElementById("pbSetStyle")

function setStyle(){
    const elm = document.querySelector("." + inpElementName.value)
    console.log(elm)
    elm.classList.add(inpStyleName.value)
}

pbSetClassName.addEventListener('click', setStyle)