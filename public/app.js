

// nav bar 

window.addEventListener('load', () => {
    let navTabs = document.querySelectorAll('nav a');
    for(let i = 0; i < navTabs.length; i++){
        if(navTabs[i].href == window.location.href){
            let activeTab = document.querySelector('nav a .active');
            if(activeTab) activeTab.className = '';
            navTabs[i].setAttribute('class', 'active');
        }
    }
})

// like button 

let like_btns = document.querySelectorAll('.catalogue .fa-heart');

like_btns.forEach(element => {
    element.addEventListener('click', liked)
})

function liked(){
    if(this.className.includes('fa-regular')){
    this.className = this.className.replace('fa-regular', 'fa-solid');
    incrementLike(this, 1);
}
    else if(this.className.includes('fa-solid')){
    this.className = this.className.replace('fa-solid', 'fa-regular');
    incrementLike(this, -1)
    }
}

function incrementLike(like_btn, count){
    let productId = like_btn.parentElement.id;
    fetch('/like/' + productId)
    .then(response => response.json())
    .then(product => {
    const likesCounter = document.querySelector('div[id="' + productId + '"] .likesCounter')
    product.likes += count;
    likesCounter.innerHTML = product.likes + ' likes';
    fetch('/like/' + productId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(response => console.log('successfully liked'))
    .catch(err => console.log(err)) 
})
.catch(err => console.log(err))}

// search bar 

const search_btn = document.querySelector('.searchBar button');

search_btn.addEventListener('click', () => {
    const search_val = document.querySelector('.searchBar input').value;
    fetch('/search?keyword=' + search_val)
    .then(response => window.location.href = response.url)
    .catch(err => console.log(err));
})

