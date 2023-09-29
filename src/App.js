import logo from './logo.svg';
import './App.css';
import Sidebar from './Functional-Components/Sidebar';
import Main from './Functional-Components/Main';
import Display from './Functional-Components/Display';


function App() {
  return (
    <>
      <div id='sidebar'>
        <Sidebar />
      </div>
      
      <div id='homeDisplay'>
        <Display />
      </div>
      
    </>

    // <Main />
  );
}
export default App;
