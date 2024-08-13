import raz from './assets/raz.png'
import './App.css';
import Gallery from './gallery';
import YouIn from './YouIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h1 className="display-2 p-5">Why you should date Adam Razick </h1>
        <img src={raz} className="App-logo img-fluid"  alt="logo" />
      </header>
        <h1 className='p-5 pb-1'> Education </h1>
        <ol>
          <li> M.S. Drexel University '25 </li>
          <li> B.A. Rutgers University '22 </li>
          <li> South Brunswick High School '18 </li>
          <li> Pelham Middle School '14</li>
        </ol>
        <h1 className='p-5 pb-1'> What Makes Adam <i>Husband Material</i>? </h1>
        <Gallery/>
        <h1 className='p-5 pb-2'> So, you in? </h1>
        <YouIn />
    </div>
  );
}

export default App;
