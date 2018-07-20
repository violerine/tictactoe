import React, {Component} from 'react';
import { View , Text, TouchableOpacity} from 'react-native'

export default class PlayScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            press1:false,
            press2:false,
            press3:false,
            press4:false,
            press5:false,
            press6:false,
            press7:false,
            press8:false,
            press9:false,
            pressed:false
        }
    }
    disableOnPress1(){
        if(this.state.press1===true){
            return true
        }
        else{
            return false
        }
    }
    disableOnPress2(){
        if(this.state.press2===true){
            return true
        }
        else{
            return false
        }
    }
    disableOnPress3(){
        if(this.state.press3===true){
            return true
        }
        else{
            return false
        }
    }
    disableOnPress4(){
        if(this.state.press4===true){
            return true
        }
        else{
            return false
        }
    }
    disableOnPress5(){
        if(this.state.press5===true){
            return true
        }
        else{
            return false
        }
    }
    disableOnPress6(){
        if(this.state.press6===true){
            return true
        }
        else{
            return false
        }
    }
    disableOnPress7(){
        if(this.state.press7===true){
            return true
        }
        else{
            return false
        }
    }
    disableOnPress8(){
        if(this.state.press8===true){
            return true
        }
        else{
            return false
        }
    }
    disableOnPress9(){
        if(this.state.press9===true){
            return true
        }
        else{
            return false
        }
    }
    checkPress(){
        if(this.state.pressed==true){
            this.setState({
                pressed :false
            })
        }
        else{
            this.setState({
                pressed:true
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.press1 !== nextState.press1){
            return true : false
        }
        if(this.state.press2 !== nextState.press2){
            return true
        }
        if(this.state.press3 !== nextState.press3){
            return true
        }
        if(this.state.press4 !== nextState.press4){
            return true
        }
        if(this.state.press5 !== nextState.press5){
            return true
        }
        if(this.state.press6 !== nextState.press6){
            return true
        }
        if(this.state.press7 !== nextState.press7){
            return true
        }
        if(this.state.press8 !== nextState.press8){
            return true
        }
        if(this.state.press9 !== nextState.press9){
            return true
        }
        else{ 
            return false
        }

      }
    render(){
        return(
            <View>
                 <Text style={
                    {
                    fontSize:30, 
                    textAlign:'center',
                    marginTop:100,
                    }}> Let's Play </Text>
                <View style={{flexDirection:'row',justifyContent:'center', marginTop:50}}>
                    <TouchableOpacity className="button1" disabled={this.disableOnPress1()} onPress={()=>{
                            this.setState({
                                count:this.state.count+1,
                                press1:true
                            })
                            console.log("THIS COUNT",this.state.count)
                        }} style={
                        [this.state.count%2 ===0 ? styles.buttonPressedEven : styles.buttonPressedOdd ||
                        this.state.count%2!==0 ? styles.buttonPressedOdd : styles.button
                        ]}></TouchableOpacity>
                    <TouchableOpacity className="button2" disabled={this.disableOnPress2()} onPress={()=>{
                        this.setState({
                            count:this.state.count+1,
                            press2:true
                        })
                    }} style={
                        [this.state.count%2 ===0 ? styles.buttonPressedEven : styles.buttonPressedOdd ||
                        this.state.count%2!==0 ? styles.buttonPressedOdd : styles.button
                        ]}></TouchableOpacity>
                    <TouchableOpacity className="button3" disabled={this.disableOnPress3()} onPress={()=>{
                        this.setState({
                            count:this.state.count+1,
                            pres3:true
                        })
                    }} style={
                        [this.state.count%2 ===0 ? styles.buttonPressedEven : styles.buttonPressedOdd ||
                        this.state.count%2!==0 ? styles.buttonPressedOdd : styles.button
                        ]}></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity disabled={this.disableOnPress4()} onPress={()=>{
                            this.setState({
                                count:this.state.count+1,
                                press4:true
                            })
                            disabled=true
                        }} style={
                            [this.state.count%2 ===0 ? styles.buttonPressedEven : styles.buttonPressedOdd ||
                            this.state.count%2!==0 ? styles.buttonPressedOdd : styles.button
                            ]}></TouchableOpacity>
                    <TouchableOpacity  disabled={this.disableOnPress5()} onPress={()=>{
                        this.setState({
                            count:this.state.count+1,
                            press5:true
                        })
                    }} style={
                        [this.state.count%2 ===0 ? styles.buttonPressedEven : styles.buttonPressedOdd ||
                        this.state.count%2!==0 ? styles.buttonPressedOdd : styles.button
                        ]}></TouchableOpacity>
                    <TouchableOpacity disabled={this.disableOnPress6()} onPress={()=>{
                        this.setState({
                            count:this.state.count+1,
                            press6:true
                        })
                    }} style={
                        [this.state.count%2 ===0 ? styles.buttonPressedEven : styles.buttonPressedOdd ||
                        this.state.count%2!==0 ? styles.buttonPressedOdd : styles.button
                        ]}></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity disabled={this.disableOnPress7()} onPress={()=>{
                            this.setState({
                                count:this.state.count+1,
                                press7:true
                            })
                            disabled=true
                            console.log("THIS COUNT",this.state.count)
                        }} style={
                            [this.state.count%2 ===0 ? styles.buttonPressedEven : styles.buttonPressedOdd ||
                            this.state.count%2!==0 ? styles.buttonPressedOdd : styles.button
                            ]}></TouchableOpacity>
                    <TouchableOpacity  disabled={this.disableOnPress8()} onPress={()=>{
                        this.setState({
                            count:this.state.count+1,
                            press8:true
                        })
                    }} style={
                        [this.state.count%2 ===0 ? styles.buttonPressedEven : styles.buttonPressedOdd ||
                        this.state.count%2!==0 ? styles.buttonPressedOdd : styles.button
                        ]}></TouchableOpacity>
                    <TouchableOpacity disabled={this.disableOnPress9()} onPress={()=>{
                        this.setState({
                            count:this.state.count+1,
                            press9:true
                        })
                    }} style={
                        [this.state.count%2 ===0 ? styles.buttonPressedEven : styles.buttonPressedOdd ||
                        this.state.count%2!==0 ? styles.buttonPressedOdd : styles.button
                        ]}></TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles ={
    buttonPressedOdd:{
        backgroundColor:'red',
        width:100,
        height:100,
        margin:2
      },
    button:{
        backgroundColor:'black',
        width:100,
        height:100,
        margin:2
    },
    buttonPressedEven:{
        backgroundColor:'blue',
        width:100,
        height:100,
        margin:2
    }
}