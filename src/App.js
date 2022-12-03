import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Choices from './Components/Choises/Choises';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Profils from './Components/Profils/Profils';
import Questions from './Components/Question/Question';
import Services from './Components/Services/Services';

function App() {
  return (
      <>
       <Header />
       <Services />
       <Choices />
       <Doctors />
       <Profils />
       <Questions />
       <Footer/>
      </>
  );
}

export default App;
