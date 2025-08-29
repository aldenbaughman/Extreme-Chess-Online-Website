import { useReducer } from 'react';
import './App.css';
import Board from './components/board/board';
import AppContext from './contexts/context';
import { reducer } from './reducer/reducer';
import { initGameState } from './constant';


function App() {

  const [appState, dispatch] = useReducer(reducer, initGameState)
  
  const providerState = {
    appState,
    dispatch
  }

  return (
    <AppContext value={providerState}>
      <div className="App">
        <Board/>
      </div> 
    </AppContext>
  );
}

export default App;
