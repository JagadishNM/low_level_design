const container = document.querySelector('.container');
loadImages();
window.addEventListener('scroll', () =>{
    // throttle example
    limitsExecutation();

    if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
        loadImages();
    }
})

async function loadImages(){
    const data = await fetch('https://meme-api.com/gimme/20');
    const json = await data.json();
    const dFrag = document.createDocumentFragment();
    for(let i = 0; i < json.memes.length; i++){
        const img = document.createElement('img');
        img.src = json.memes[i].url;
        dFrag.appendChild(img);
    }
    container.appendChild(dFrag)
     
}

function throttle(mainfunc, delay = 1000){
    let timerFlag = null;

    return (...args) => {
        if(timerFlag === null){
            mainfunc(args);
            timerFlag = setTimeout(() =>{
                timerFlag = null;
            },delay)
        }
    }
}

const limitsExecutation = throttle(print, 2000)

function print(){
    console.log('throttle limits execution of code');
}