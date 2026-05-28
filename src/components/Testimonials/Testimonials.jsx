import "./testimonials.css";
import workanaclient from "../../assets/workanaclient.png";
import mipaz from "../../assets/mipaz.jpg";
import photoangie from "../../assets/photoangie.png";
import workanalogo from "../../assets/workanalogo.png";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <span className="section-tag">
          EXPERIENCIAS REALES
        </span>


        <p>
          Clientes reales, proyectos reales y resultados construidos con confianza.
        </p>
      </div>

      <div className="testimonials-grid">

        {/* Testimonio 1 */}
        <div className="testimonial-card">

            <div className="testimonial-image">
             <img src={mipaz} alt="Testimonio Fernando - Chile" className="worka"/>
            </div>

            <div className="stars">★★★★★</div>

            <p className="testimonial-text">
                Andres me ayudó a crear mi marca. 
                Fue muy profesional e innovador durante las sesiones creativas. 
                Quedé muy satisfecha con el resultado de mi identidad de marca.
            </p>

            <div className="testimonial-user">
                <div className="avatar">
                  <img src={photoangie} alt="Avatar" />
                </div>
                <div>
                <h4>Angie Rodriguez</h4>
                <span>Malta · Founder</span>
                </div>
            </div>
            </div>
            
        {/* LinkedIn 2 */}
        <div className="testimonial-card linkedin-card">
          <div className="linkedin-badge">
                ✔ Testimonio verificado · LinkedIn · Chile
                <div className="stars">★★★★★</div>
            </div>

         <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7454710291847733248?collapsed=1" height="670" width="504"  allowfullscreen="" title="Publicación integrada">
         </iframe>
          
        </div>

        

      {/* Testimonio 2 */}
            <div className="testimonial-card">

            <div className="testimonial-image">
             <img src={workanaclient} alt="Testimonio Fernando - Chile" className="worka"/>
            </div>

            <div className="stars">★★★★★</div>

            <p className="testimonial-text">
                El proyecto superó nuestras expectativas. Realmente recomendamos su trabajo, 
                además de valorar y agradecer el compromiso con nuestro proyecto y el aporte brindado.
                 ¡Sin dudas nos encantará volver a trabajar juntos!
            </p>

            <div className="testimonial-user">
                <div className="avatar">
                  <img src={workanalogo} alt="Avatar" className="avatar-img"/>
                </div>
                <div>
                <h4>Workana company</h4>
                <span>Argentina · Founder</span>
                </div>
            </div>
            </div>


      </div>
    </section>
  );
}