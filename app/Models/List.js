import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from '../AppState.js'

export default class List {
  constructor(listName) {
    this.title = listName.title
    this.id = listName.id || generateId();

    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)

  }

  get Template() {

    return /*html*/`
    
          <div class="col-4 shadow-lg rounded">
            <h4>${this.title}<button class="text-danger close mt-3" onclick="app.listController.deleteList('${this.id}')"><span>&times;</span></button></h4>
             <div class="add-items">
             <form onsubmit="app.taskController.createTask(event, '${this.id}')">
              <input type="text" class="form-control todo-list-input" name="taskTitle" placeholder="What do you want to add?">
              <button class="btn btn-primary font-weight-bold" >Add</button> 
             </form>
                
             </div>
             <div class="row">
              <div class="col-12">
              ${this.Tasks}
              </div>
              </div>
          </div>
    `
  }

  get Tasks(){
    let template = ""
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template 
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
