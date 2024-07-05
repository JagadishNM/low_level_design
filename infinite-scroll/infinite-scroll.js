const container = document.querySelector('.container');
loadImages();
window.addEventListener('scroll', () =>{
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
        loadImages();
    }
})

async function loadImages(){
    const data = await fetch('https://meme-api.com/gimme/20');
    const json = await data.json();

    for(let i = 0; i < json.memes.length; i++){
        const img = document.createElement('img');
        img.src = json.memes[i].url;
        container.appendChild(img)
    }
     
}