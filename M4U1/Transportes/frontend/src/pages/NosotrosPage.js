import '../styles/nosotros.css'

const NosotrosPage = (props) => {
    return (
        <main>
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, rem saepe. A enim qui facilis consectetur. Tempora dolores culpa libero a natus fugit ea ratione reprehenderit, Consequuntur, debitis corrupti asperiores</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, rem saepe. A enim qui facilis consectetur. Tempora dolores culpa libero a natus fugit ea ratione reprehenderit, Consequuntur, debitis corrupti asperiores</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="nosotros1.jpg" alt="Juan Gomez" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente general</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, rem saepe. A enim qui facilis consectetur. Tempora dolores culpa libero a natus fugit ea ratione reprehenderit, Consequuntur, debitis corrupti asperiores</p>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage