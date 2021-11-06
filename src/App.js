import './App.css';
import Footer from './component/footer/Footer';
import Main from './component/main/Main';
import Navigation from './component/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
