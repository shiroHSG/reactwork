import './App.css';

function App() {
  const isStudent = true;
  return (
    <div className="App">
      {isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>}
    </div>
  );
}

export default App;
