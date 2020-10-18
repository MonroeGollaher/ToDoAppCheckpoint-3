import { listService } from "../Services/ListService.js";
import { ProxyState } from '../AppState.js'

function _drawLists(){ 
  let template = ""
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById("app").innerHTML = template

}

//Public
export default class ListController {
  constructor() {
    ProxyState.on("lists", _drawLists)
    ProxyState.on("tasks", _drawLists)
    _drawLists();
  }

  createList(event){
    event.preventDefault()

    let form = event.target 
    let listName = {
      title: form.title.value
    }

    listService.createList(listName)
    // form.resest()
  }

  deleteList(id){
    listService.deleteList(id)
  }

  //TODO: Your app will need the ability to create, and delete lists
}
