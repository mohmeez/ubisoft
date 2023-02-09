import './App.css';



import {Navbar, Header, Features, Download, Subscribe, Footer} from "./components";
import Contact  from "./components/contact/Contact";

function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar/>
        <Header/>
      </header>
      <Features/>
      <Download/>
      <Subscribe/>
      <Contact/>
      <Footer/>   
    </main>
  );
}

export default App;
