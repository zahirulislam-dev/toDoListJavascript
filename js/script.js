let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let ul = document.querySelector('.ul')

btn.addEventListener('click', function(){
    console.log(input.value);
    let li = document.createElement('li')
    li.innerHTML = input.value;
    input.value = ''
    ul.appendChild(li)

    let span = document.createElement('span')
    span.innerHTML = ' <i class="fa-solid fa-trash"></i> '
    li.appendChild(span)
})

ul.addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName == 'LI'){
        alert('If you want to delete. Please click the delete button')
    }else if(e.target.tagName == 'I'){
        e.target.parentElement.remove()
    }
})