import "./Escala.css";

export default function Escala() {
  return (
    <main className="escala-page">

      <section className="escala-container">

        {/* PANEL OSCURO */}
        <div className="escala-info">

          <span className="escala-brand">
            HEXJIA
          </span>

          <h1>
            Lleva tu negocio
            <span> al siguiente nivel.</span>
          </h1>

          <p>
            Creamos soluciones digitales diseñadas para empresas
            que quieren crecer, automatizar y vender más.
          </p>

        </div>


        {/* PANEL BLANCO */}
        <div className="escala-contact">

          <div className="contact-content">

            <div className="message-icon">

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.85 11.85 0 0 0 12.08 0C5.55 0 .24 5.3.24 11.83c0 2.08.54 4.1 1.57 5.9L.17 24l6.43-1.68a11.82 11.82 0 0 0 5.48 1.35h.01c6.52 0 11.83-5.31 11.83-11.84 0-3.16-1.23-6.13-3.4-8.35ZM12.09 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.82 9.82 0 0 1-1.5-5.19C2.18 6.4 6.62 1.97 12.09 1.97c2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.44 9.9-9.91 9.9Zm5.42-7.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.07-.13-.27-.2-.57-.35Z" />
              </svg>

            </div>


            

            <p>
              Cuéntanos qué necesitas y descubre cómo podemos
              ayudarte a llevar tu empresa al siguiente nivel.
            </p>


            <a
              href="#contacto"
              className="contact-button"
            >
              <span>
                Iniciar conversación
              </span>

              <strong>
                →
              </strong>
            </a>


            <small>
              Atención personalizada · Sin compromiso
            </small>

          </div>

        </div>

      </section>

    </main>
  );
}

