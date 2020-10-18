import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from '../AppState.js'


export default class Task {
  constructor(taskName) {
    this.title = taskName.title
    this.id = taskName.id || generateId();
    this.listId = taskName.listId

    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
  }

  get Template(){
    
    return /*html*/`
    <div class="row m-1">
    <div class="1"></div>
    <div class="col">
    <p class="${this.taskName}" onclick="app.taskController.completeTask('${this.id}')">${this.title} </p>
    </div>
    <div class="col-1">
    <button class="text-danger close" onclick="app.taskController.deleteTask('${this.id}')">&times;</button>
    </div>
    </div>
        `
    
  }
  //Be sure to add the methods needed to create the view template for this model

}
