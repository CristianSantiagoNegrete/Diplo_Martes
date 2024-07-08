import '../styles/contacto.css'

const ContactoPage = (props) => {
    return(
        <main className="holder contacto">
            <div>
                <h2>Contacto rápido</h2>
                <form className="formulario" action="" method="" >
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="enviar" /></p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede cojntactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono; 12345678</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook: TransportesX</li>
                    <li>Twitter: Transportes_X01</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage