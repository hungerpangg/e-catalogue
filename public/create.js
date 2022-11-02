

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

// **** create product ****

// image preview 

const image_input = document.querySelector('#product_image');
const image_preview = document.querySelector('.image_input_preview img');
const image_preview_comment = document.querySelector('.image_input_preview span');

image_input.addEventListener('change', function(){
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.addEventListener('load', function(){
        image_preview.setAttribute('src', this.result);
        image_preview.style.display = 'inline-block';
        image_preview_comment.style.display = 'none';
        image_input.setAttribute('value', this.result);
    })
})




