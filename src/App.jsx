import pokemons from './assets/pokemons.png';
import fd from './assets/fd.jpg';

import './App.css';
import './components/Wordle/We.css'
import SocialMedia from './components/Social/SocialMedia';
import Program from './components/Code/Program';
import Watsapp from './components/Ws/Watsapp';
import Wordle from './components/Wordle/Wordle';



function App() {

  return (
    <>
    <navbar>
      <div className="container">
          <div className="icono">
            <a href="https://development-one1.github.io/felipe_sofware/" target="_blank">
              <img src={fd} className="logo" alt="felipe develop" />
            </a>
            <h1 className="texto">HEXJIA</h1> 
          </div> 
          
        </div>
        <div>
            <SocialMedia />
        </div>
    </navbar>
    
      <br />
      

      <header>
          <div>
            <Program />     
          </div>
        <div className='wordle-container'>
           <Wordle /> 
        </div>
      </header>

      <br />
      
      <section>
        <div className="card"> {/* Aquí se usa la clase 'card' */}
          <p className="read-the-docs">
            Portafolio
          </p>
          <div className="platzi-experiencia">
            <a href="https://github.com/development-one1/pokemons-redux/">
              <img 
                className="pokemons"
                src={pokemons} 
                alt="pokemons" 
              />
            </a>
          </div>
        </div>
      </section>

    <Watsapp />
      <br />

      <footer>
        <p>&copy; 2025 Felipe_develop. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;