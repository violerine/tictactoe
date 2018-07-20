import React, {Component} from 'react';
import { View, Text, Button } from 'react-native'

export default class HomeScreen extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={
                    {
                    fontSize:30, 
                    textAlign:'center',
                    marginTop:100,
                    }}> Welcome to Tictactoe !  </Text>
                    <Button  title='Start' onPress={() => navigate('Play')} ></Button>
            </View>
        )
    }
}