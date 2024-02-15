import logo from './logo.svg';
import './App.css';
import photo from './photo1.png'
import { ContactCard } from './ContactCard';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>
          <h1 className='name'>Harshit Halwan</h1>
          <h4 className='designation'>Full-Stack Engineer</h4>
        </div>
        <img src={photo} className='photo' alt='photo'/>
      </div>
      <div className='contactCard'>
      <ContactCard/>
      </div>
    </div>
  );
}

export default App;
