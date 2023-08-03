import React from 'react'
import { SafeAreaView } from 'react-native'
import Login from './screens/Login'
import Sinup from './screens/Signup'
import Splash from './screens/splash'
export default function App(){
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
         <Login />
    </SafeAreaView>
  )
}