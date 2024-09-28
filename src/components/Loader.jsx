import './Loader.css';

export const Loader = ()=>{
     return(
           <div className='loader'>
             {/*Aqui usar un spinner */}
             <div className='spinner'></div>
             <p>Loading...</p>
           </div>
     );
};