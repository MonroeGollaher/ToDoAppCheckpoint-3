import List from "../Models/List.js";
import { ProxyState } from "../AppState.js";
import { saveState } from "../Utils/LocalStorage.js";

//Public
class ListService {

  constructor(){
    ProxyState.on("lists", saveState)
  }

  createList(listName){
    let lists = ProxyState.lists
    lists.push(new List(listName))
    ProxyState.lists = lists
    // form.reset()
  }

  deleteList(id){
    let x = confirm("Are you sure you want to delete this list?")
    if(x == true){
      ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
    } else {

    }
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
}

export const listService = new ListService();
