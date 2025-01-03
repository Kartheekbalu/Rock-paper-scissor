document.addEventListener('DOMContentLoaded',function(){
    tag=document.getElementById('document').textContent;
    console.log(tag);
    // alert(tag);
})

document.getElementById('document').style.color="pink";


document.getElementById('btn').addEventListener('click',function(){
    document.getElementById('dummy-text').innerText="Thank you for clicking the button";
    document.getElementById('dummy-text').style.color='brown';
})