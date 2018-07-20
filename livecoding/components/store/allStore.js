import {observable, action} from 'mobx'

class mobxStore {
    @observable state = {
        
    }
    @action 
    testing(){
        console.log(this.state.name)
    }
  }
  
  const Store = new mobxStore()
  export default Store