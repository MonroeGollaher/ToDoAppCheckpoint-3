import Task from "../Models/Task.js"
import { ProxyState } from "../AppState.js";
import { saveState } from "../Utils/LocalStorage.js";

//Public
class TaskService {
    constructor(){
        ProxyState.on("tasks", saveState)
    }

    createTask(taskName){
        // console.log(taskName, new Task(taskName))
        let tasks = ProxyState.tasks
        tasks.push(new Task(taskName))
        ProxyState.tasks = tasks
        // @ts-ignore
        Swal.fire(
        'Task added!',
        'Success!'
      )
    }

    deleteTask(id){
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        // @ts-ignore
        Swal.fire(
          'Deleted!',
          ' ',
          'error'
        )
    }

    completeTask(id){
        let tasks = ProxyState.tasks
        let index = tasks.findIndex(t => t.id == id)

        if (tasks[index]['text'] == 'text-dark') {

        tasks[index]['text'] = 'strikeThrough'
        } else if (tasks[index]['text'] == 'strikeThrough') {
        tasks[index]['text'] = 'text-dark'

    }

    ProxyState.tasks = tasks
  }  
}

export const taskService = new TaskService();
