const search_terms = ['apple', 'apple watch', 'apple macbook', 'apple macbook pro', 'iphone', 'iphone 12'];

function autoCompleteMatch(input){
    if(input === ''){
        return []
    }

    const reg = new RegExp(input);

    return search_terms.filter((term) =>{
        if(term.match(reg)){
            return term;
        }
    })
}

function showResults(value){
    console.log(value)
    let container = document.querySelector('#search-result');
    container.innerHTML = '';

    let results = autoCompleteMatch(value);
    const dFrag = document.createDocumentFragment();
    for (i=0; i < results.length; i++) {
        let list = document.createElement('li');
        list.className = 'list';
        list.textContent = results[i];
        dFrag.appendChild(list);
      }
      container.appendChild(dFrag)

      // Using event listner on every li, get li value and assign to input field
      //selectItem();
}

// Using event listner on every li, get li value and assign to input field
// function selectItem(){
//     let lists = document.getElementsByClassName('list');
//     for(let i =0; i < lists.length; i++){
//         lists[i].addEventListener('click', function(){
//             let field = document.getElementById('search-field');
//             field.value = lists[i].textContent;
//         })
//     }
// }


// using event propagation, get li value and assign to input field
function searchItem(event){
    let field = document.getElementById('search-field');
    field.value = event.target.textContent;
    event.stopPropagation();
}

function debounce(func, delay = 1000){
    let timer;

    return (...args) =>{

        clearTimeout(timer);

        timer = setTimeout(() =>{
            func.apply(this, args)
        }, delay)
    }
}

const delayExec = debounce(showResults, 1000);

function search(value){
    delayExec(value)
}