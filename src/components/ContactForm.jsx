import { useState } from "react";

export const ContactForm=()=>{
    const [nombre,setNombre] = useState("");
    const [email,setEmail]= useState("");
    const [mensaje,setMensaje]=useState("");
    const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre!="" && email!="" && mensaje!=""){
        alert(`Hola ${nombre}! Tu email es ${email} mensaje: ${mensaje}`);
        setNombre("");
        setEmail("");
        setMensaje("");
    }else{
        alert("Los campos no deben estar vacios ")
    }
    
    

};
    return(
        <div className="container">
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit} className="formulario">
                <label htmlFor="">Nombre</label>
                <input type="text" name="" id="" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <label htmlFor="">Mensaje</label>
                <textarea name="" id="" value={mensaje} onChange={(e)=>{setMensaje(e.target.value)}}></textarea>
                <input type="submit" className="button" value={"Enviar"} disabled={nombre === "" || email === "" || mensaje === ""} />
            </form>
            <div className="preview card">
                <h3>Previsualización</h3>
                <p><strong>Nombre:</strong> {nombre||"sin nombre"}</p>
                <p><strong>Email:</strong> {email||"sin email"}</p>
                <p><strong>Mensaje:</strong> {mensaje||"sin mensaje"}</p>
            </div>
        </div>
        
    )
}
export default ContactForm;