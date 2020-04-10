import React from 'react'
import { View, Text, Image } from 'react-native'

import clockFace from './Images/olga-tsai-5a2oypQA4P8-unsplash.jpg'

function formatClock(timestamp){
  const clock = new Date(timestamp)
  return clock.toTimeString().split(' ')[0]
}

export default class ClockView extends React.Component{
  state = {}
  componentDidMount(){
    setInterval(()=>{
      const timestamp = Date.now()
      this.setState({timestamp})
    }, 100)
  }
  render(){
    const {timestamp} = this.state
    return(
      <View style={{width:'100%', height:'100%', alignItems:'center', justifyContent:'center', backgroundColor:'darkblue'}}>
        <Image source={clockFace} style={{width:'100%', height:'100%', position:'absolute'}} />
        <Text style={{color:'white', fontSize:32, fontWeight:'bold'}}>{formatClock(timestamp)}</Text>
      </View>
    )
  }
}
