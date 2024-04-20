import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-white')
    document.body.classList.remove('bg-black')
    document.body.classList.remove('text-black')
    document.body.classList.remove('text-white')
    document.body.classList.remove('text-light-emphasis')
  }

  
  const changingMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if(document.body.classList.contains('bg-white')){
      document.body.classList.add('text-black')
    }
    else if(document.body.classList.contains('bg-warning')){
      document.body.classList.add('text-light-emphasis')
    }
    else{
      document.body.classList.add('text-white')
    }
  }
  
  return (
    <>
    <Navbar title='TextUtils' about="About TextUtils" toggleMode={changingMode}/>

    <Home />
    </>
  );
}

export default App;
