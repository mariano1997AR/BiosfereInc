import { useState } from "react";

export const Calcular = ()=>{
    //costo
    //tiempo
    //calidad

    const [tiempo, setTiempo] = useState('');
    const [costo, setCosto] = useState('');
    const [calidad,setCalidad] = useState('');
    const [result,setResult] = useState(null);
   
    //manejar los inputs
    const handleCosto = (e) => setCosto(e.target.value);
    const handleCalidad = (e) => setCalidad(e.target.value);
    const handleTiempo = (e) => setTiempo(e.target.value);

    //maneja el envio de formulario

    const handleSubmit = (e)=>{
      e.preventDefault();
      
    }

    return(
      <>
         
         <h2>Calcular</h2>
         <form onSubmit={handleSubmit}>
             <div>
               <input 
                type="number"
                value={tiempo}
                onChange={handleTiempo} 
                placeholder="Ingresa el tiempo de desarrollo"
                required
              />
             </div>
             <div>
               <input 
                 type="number"
                 value={costo}
                 onChange={handleCosto}
                 placeholder="Ingresa el costo"
                 required
               />
             </div>
            
             <div>
                <input 
                  type="text"
                  value={calidad}
                  onChange={handleCalidad}
                  placeholder="Ingresa el nivel de calidad"
                  required
                />
             </div>
             <button type="submit">agregarItem</button>
          

         </form>
      </>
   )

};