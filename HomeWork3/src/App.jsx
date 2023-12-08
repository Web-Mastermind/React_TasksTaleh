import TaskInput from "./components/TaskInput";
import {useState} from "react"
import Taskitem from "./components/Taskitem";
import Stats from "./components/Stats";
function App() {
  const [toDoList, setToDoList] = useState([])
  const addTask = (taskName) => {
    const newTask = {taskName, checked: false};
    setToDoList([...toDoList, newTask])
  }

  function deleteTask (deleteTaskName) {
    setToDoList(toDoList.filter(task=> task.taskName !== deleteTaskName))
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList)=> prevToDoList.map(task=> task.taskName === taskName ? {...task, checked: !task.checked}: task))

  }
  return (
    <>
    <div className="container">
      <h1>Task Master</h1>
      <TaskInput addTask={addTask}/>

      <div className="toDoList">
        <span>To Do</span>
        <ul className="list-items">
          {toDoList.map((task, key) => (<Taskitem task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck} /> ))}
        </ul>
        {toDoList.length ===0?<p className="notify">You are done!</p>:null}
      </div>
    </div>
    <Stats toDoList={toDoList}/>
    </>
  )
}

export default App
