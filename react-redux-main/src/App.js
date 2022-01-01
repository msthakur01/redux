import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeConatainer from './components/HooksCakeConatainer';
import NewCakeContainer from './components/NewCakeContainer';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">

    <CakeContainer/>
    <HooksCakeConatainer/>
    <NewCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
