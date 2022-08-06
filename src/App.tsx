import {HashRouter as Router} from 'react-router-dom'
import AppRoutes from "./components/AppRoutes";
import {Provider} from "react-redux";
import store from './store/index.ts'


function App() {
  return (
    <Router>
     <Provider store={store}>
       <AppRoutes/>
     </Provider>
    </Router>
  );
}

export default App;
