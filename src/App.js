import './App.css';
import { Routes, Route} from "react-router-dom";
import { Home, Animecg, KOF, MP, TK, EV, HXH, CM, B} from "./router";


function App() {
  return (
    <div className='App-header'>
     <Routes>
      <Route exact path="/" element={ <Home/>}/>
      <Route path='/code_geass' element={ <Animecg/>}/>
      <Route path='/knights_of_sidonia' element={<KOF/>}/>
      <Route path='/mob_psycho' element={<MP/>}/>
      <Route path='/tokyo_ghoul' element={<TK/>}/>
      <Route path='/evangelion' element={<EV/>}/>
      <Route path='/hunter_x_hunter' element ={<HXH/>}/>
      <Route path='/chainsaw_man' element= {<CM/>}/>
      <Route path='/bloodplus' element= {<B/>}/> 
     </Routes>
    </div>
  );
}

export default App;
