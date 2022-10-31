import { Footer } from './components/common-components/footer';
import { Header } from './components/common-components/header';
import { Introduction } from './components/pages/introduction';
import { Events } from './components/pages/events';
import { Routes, Route } from "react-router-dom";
import { Timeline } from './components/pages/timeline';
import { Venue } from './components/pages/venue';
import { Gifts } from './components/pages/gifts';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route exact path="/events" element={<Events/>}/>
            <Route exact path="/timeline" element={<Timeline/>}/>
            <Route exact path="/venue" element={<Venue/>}/>
            <Route exact path="/gifts" element={<Gifts/>}/>
            <Route exact path="/" element={<Introduction/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
