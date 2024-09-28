import CarouselPrincipal from './CarouselPrincipal.jsx';
import './Home.css';

export const Home = ()=>{
    return(
       <span className="principal">
               <CarouselPrincipal></CarouselPrincipal>
               <h2 className='subtitulo'>Nosotros</h2>
               <section className='home'>
                   <article className='article1 '>
                       <h2>Análisis de Requisitos </h2>
                        <ul className='texto'>
                            <li>Colaborar con clientes, usuarios y otros miembros del equipo para entender
                                las necesidades y los requisitos del software.
                            </li>
                            <li>
                                Traducir estos requisitos en especificaciones técnicas claras y detalladas.
                            </li>
                        </ul>
                   </article>
                   <article className='article1 '>
                       <h2>Diseño de software</h2>
                       <ul className='texto'>
                            <li>Crear la arquitectura y el diseño del software, definiendo cómo se estructurará el sistema o la aplicación.</li>
                            <li>Seleccionar tecnologías, lenguajes de programación y herramientas adecuadas para el proyecto.</li>
                            <li>Diseñar la interfaz de usuario (UI) y la experiencia de usuario (UX) si es parte de su rol</li>
                       </ul>
                   </article>
                </section>
                <section className='home'>
                <article className='article1 '>
                       <h2>Desarrollo</h2>
                       <ul className='texto'>
                            <li>Escribir, probar y depurar el código.</li>
                            <li>Implementar características y funcionalidades del software de acuerdo con las especificaciones.</li>
                            <li>Asegurarse de que el còdigo sea eficiente, escalable y fácil de mantener</li>
                       </ul>
                   </article>
                   <article className='article1 '>
                       <h2>Pruebas y Depuración</h2>
                       <ul className='texto'>
                            <li>Realizar pruebas para identificar errores y garantizar que el software funcione correctamente.</li>
                            <li>Usar pruebas automatizadas y manuales para validar la funcionalidad del software.</li>
                            <li>Depurar y corregir errores identificados durante las pruebas o por los usuarios.</li>
                       </ul>
                   </article>
                      
                </section>
                
                <h3 className='subtitulo'>Nuestro compromiso</h3>

                <section className='home'>
                       <article className='article1'>
                            <h3>Trabajar en equipo</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque id harum illum, ab quia beatae fuga enim ea quisquam illo assumenda voluptatem unde quidem dolorum exercitationem eius laudantium accusantium sit.
                            Repudiandae magnam a tenetur asperiores aperiam sapiente iste pariatur itaque eum rerum quidem maiores laudantium repellat fuga molestiae ab, qui tempora soluta vel, eius sunt ea. Temporibus tempore numquam amet?</p>
                       </article>
                       <article>
                            <img className='imagen-colaboradores' src="/img/colaborativo.jpg" height={400} width={500} alt="equipo-colaborativo" />
                       </article>
                </section>
       </span>
         
    );
};