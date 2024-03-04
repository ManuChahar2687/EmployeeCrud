import './App.css';
// import Message from './Components/Message';
import HelloService from './Services/HelloService';
import Employee from './Services/Employee';

function App() {
  return (
    <div className="App">
      {/* <Message/> */}
      {/* <HelloService mes1='hehe' mes2='huhu'/> */}
      <Employee empid='1' empname='empname' empsalary='100' empdep='department' />
    </div>
  );
}

export default App;
