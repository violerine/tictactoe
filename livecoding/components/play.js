import React, {Component} from 'react';
import { View , Text} from 'react-native'

export default class PlayScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>{
                        this.setState({
                            
                        })
                    }} style={this.state.press9 ? styles.buttonPressed : styles.button}></TouchableOpacity>
            </View>
        )
    }
}


const styles ={
    buttonPressed:{
        backgroundColor:'red',
        width:100,
        height:100,
        margin:2
      },
    button:{
        
    }
}