import React, {Component} from 'react';
import { View , Text, Button} from 'react-native'

export default class GameoverScreen extends Component{
    render(){
        return(
            <View>
                 <Text style={
                    {
                    fontSize:30, 
                    textAlign:'center',
                    marginTop:100,
                    }}> GAME OVER  </Text>
                    {/* <Button title="restart"></Button> */}
            </View>
        )
    }
}