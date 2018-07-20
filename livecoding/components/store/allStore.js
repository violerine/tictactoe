import {observable, action} from 'mobx'

class mobxStore {
    @observable state = {
        name:'',
        username:'',
        password:'',
        picData:[]
    }
    
    @action 
    testing(){
        console.log(this.state.name)
    }
  }
  
  const Store = new mobxStore()
  export default Store