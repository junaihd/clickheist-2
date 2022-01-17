document.addEventListener('DOMContentLoaded', ()=>{
    let date = new Date();
    document.querySelector('.opt-a').innerHTML = date.getDate();


    document.querySelector('.opt-b').innerHTML = date.getMonth()+1;

    document.querySelector('.opt-c').innerHTML = date.getFullYear();
})
