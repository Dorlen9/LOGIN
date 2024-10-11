let emailValido = "root@cbtis258.edu.mx";
let passValido = "admin123";

const chequeLogin =(event)=> {
    event.preventdefault();

    const email = document.getElementsByID("email").value;
    const password = document.getElementsByID("password").value;
    const mensaje = document. getElementsByID("logingmensaje").value;


    if(email === emailvalido && password === passValido){
        mensaje.textcontent = "inicio de sesion correcto";
        mensaje.style.color = "green";
        
        setTimeout(() => {
           
            
        }, 1000);

    }
    else {
        mensaje.textcontent ="email o contraseña incorrecta";
        mensaje.style.color ="reed";
    }

}