import { Footer } from './components/common-components/footer';
import { Header } from './components/common-components/header';
import { Introduction } from './components/pages/introduction';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route exact path="/" element={<Introduction/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
