const accordians = document.getElementsByClassName('accordian');
const accordianHead = document.getElementsByClassName('accordian-title');

for(let i = 0; i < accordianHead.length; i++){
    accordianHead[i].addEventListener('click', toogle);
}

function toogle(){
    const itemClass = this.parentNode.className;

    for(let i = 0; i < accordians.length; i++){
        accordians[i].className = "accordian close"
    }

    if(itemClass === "accordian close"){
        this.parentNode.className = "accordian open"
    }
}