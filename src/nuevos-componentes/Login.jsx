
//Importamos una variable de estado, que nos ayudara a controlar el estado de la sesion del login, y ademas importamos el Menu para despues deingresar en el login
import React, {useState}from 'react'
import {Menu } from './Menu'

/**Implementamos bootstrap, usamos este link
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> 
y lo implementamos en el index de la carpeta public**/

export const Login =()=>{

//una variable de estado que nos va controlar el login
const [miLogin,setLogin]=useState("false");

//Y otras 2 variables de estado login y contraseña para capturar esos datos
const [usuario,setUsuario]=useState("");
const [contrasena,setContrasena]=useState("");


function iniciarSesion(e){
    e.preventRecargaPage();
    var txtusu = document.getElementById("txtusu").value;
    var txtcontra = document.getElementById("txtcontra").value;

if(txtusu.length===0 || txtcontra===0){
    alert("Complete los datos");
}else{
    if(usuario === "andres.rodriguez@gmail.com" && contrasena === "123"){
        setLogin("true");
        document.getElementById("form_login").style.display = "none";
        //Despues hacemos la validacion si es correcto, que nos lleve al Menu, o link que queremos redireccionar, en la linea 61 debajo del formulario, dentro del form y div
    }else{
        setLogin("false");
        alert("Contraseña o usuario incorrecto");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtcontra").value = "";
        document.getElementById("txtusu").focus();
    }
  }

}
    return (


        <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
            <form id="form_login">
                <div>
                    <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
                    <label htmlFor="txtusu"><strong>Usuario</strong></label>
                    <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setUsuario(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="txtcontra"><strong>Contraseña</strong></label>
                    <input type="password" id="txtcontra" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setContrasena(e.target.value)} required/>
                </div><br/>
                <div>
                <input type="submit"  className="btn btn-primary" value="Iniciar Sesión" onClick={iniciarSesion}/>
                </div>
               <div>
               <input type="submit"  className="btn btn-primary"  style={{textAlign:"center", marginTop:10}} value="Registrar" onClick={iniciarSesion}/>
               </div>

            </form>

  
     {miLogin ==="true" && <Menu usuario ={usuario}/> }


        </div>
        
        )
}