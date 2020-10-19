import { ProxyState } from '../AppState.js'
import {taskService} from "../Services/TaskService.js"

// //TODO Don't forget to render to the screen after every data change.
// function _drawTasks(){ 
//     let template = ""
//     ProxyState.lists.forEach(t => template += t.Template)
//     document.getElementById("tasks").innerHTML = template
  
//   }

export default class TaskController {

    createTask(event, listId) {
        event.preventDefault()
        let form = event.target
        // console.log(form)
        let task = {
            title: form.taskTitle.value, 
            listId: listId
        }

        taskService.createTask(task)
        console.log(task)
        form.reset()
    }

    deleteTask(id){
        taskService.deleteTask(id)
    }

    completeTask(id) {
        taskService.completeTask(id)
      }
    
}

