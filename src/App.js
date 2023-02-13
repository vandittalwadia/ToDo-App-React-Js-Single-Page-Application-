
import './App.css';
import {useState ,useRef} from "react";
function App() {

  const [todoList , setTodoList] = useState([]);
  const [currentTask, setCurrentTask]= useState("");
  const addTask = ()=>{
       
        setTodoList([...todoList , {task: currentTask,completed:false}]);

  };
  const deleteTask = (tasktoDelete)=>{
        setTodoList(todoList.filter((task)=>{
          return task.task !== tasktoDelete;
        })
    );
  };

  const completeTask = (tasktoComplete)=>{
    setTodoList(todoList.map((task)=>{
      return task.task == tasktoComplete ? {task: tasktoComplete , completed : true } : {task: task.task , completed : task.completed ? true : false};
    })
);
};
  return (
    <div className="App">
         <h1>Todo List Application</h1>
         <div>
           Enter Task : <input type="text" placeholder="Enter task.." onChange={(event) =>{setCurrentTask(event.target.value)}}/>
           <button id="mybtn" onClick={addTask}>Add Task</button>
           <hr />
         </div>
         
         <ol>
       
            {todoList.map((val,key)=>{
              return (
              <div id="task">
                <table >
                  <tr>
                    <td><li key={key}> {val.task } </li></td>
                    <td> <button id="mybtn1" onClick={()=>completeTask(val.task)}>Task Completed</button></td>
                    <td><button id="mybtn2" onClick={()=>deleteTask(val.task)} >Delete</button></td>
                    <td><h3>Status :</h3>{val.completed ? (<h3>Task Completed</h3>) : (<h3>Task Not Completed</h3>)}</td>
                
                 </tr>
                </table>
                
               </div> );
              
            })}
            
         </ol>
        
    </div>
    
  );
}

export default App;
