import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Todoitem from './components/Todoitem';

const tmpData = [
  {
    id : 0,
    isDone : false,
    content : 'React 공부하기',
    date : new Date().getTime()
  },
  {
    id : 1,
    isDone : false,
    content : '꿀맛같은 휴식',
    date : new Date().getTime()
  },
  {
    id : 2,
    isDone : false,
    content : '친구와 게임하기',
    date : new Date().getTime()
  }
]

function App() {
  const [todos, setTodos] = useState(tmpData);

  const idRef = useRef(3);
  
  function onCreate(content) {
    const newItem = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime()
    }
    setTodos([newItem, {...todos}])
  }
  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos}/>
      <Todoitem/>
    </div>
  );
}

export default App;
