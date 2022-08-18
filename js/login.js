
function login (){
    let correo = document.getElementById('email');
    let clave = document.getElementById('clave');
   

    if(correo.value === "" || clave.value ==="")
    {
       
       correo.classList.add('is-invalid');
       clave.classList.add('is-invalid');
       
    }
else
{
location.href='index.html';
}
}
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("btningres").addEventListener('click',()=>{
        login();
    })
})