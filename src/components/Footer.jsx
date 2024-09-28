import './Footer.css';

export const Footer = ()=>{
   return(
   <footer className="footer-container">
      <section className="social-icons">
        <a href="https://github.com/mariano1997AR"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/gmsoluciones_ar/"><i className="fa-brands fa-instagram"></i></a>
        <a href="mailto:Guille.martinotti2019@gmail.com"><i className="fa-regular fa-envelope"></i></a>
        <a href="https://gmsoluciones.com.ar/index.php"><i className="fa-solid fa-house"></i></a>
      </section>
     <section className="footer-nav">
    <ul className='submenu-links'>
      <li><a href="https://gmsoluciones.com.ar/views/politica.php">Politica</a></li>
      <li><a href="#">Privacidad</a></li>
      <li><a href="https://gmsoluciones.com.ar//views/normas.php">Normas IRAM</a></li>
    </ul>
   </section>
   <section className="footer-bottom">
     <p><span className="designer">AcceleratedSoft</span> Copyright &copy;2024;</p>
   </section>
  </footer>
 
   );
};