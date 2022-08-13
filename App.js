import { StyleSheet, View,Text, } from "react-native";
import React,{useState} from 'react';
import { TouchableOpacity } from "react-native";


export default function App() {
  const [resultText,setresulttext]=useState(" ");
  const [calculationtext,setcalculationtext]=useState(" ");
  const onbtnclick=(text)=>{
    console.log(text)
    if(text=="="){
      return calculation();
    }
    setresulttext(resultText + text)
  }
  const onoperationclick=(text)=>{
    let operations=["AC","DEL","+","-","*","/"]
    if (text=="AC"){
      setcalculationtext('0')
      setresulttext(" ")
      return;
    }
    if(text=="DEL"){
      return setresulttext(resultText.toString().substring(0,resultText.length-1))
    }
    console.log(text)
    if(operations.includes(resultText.toString().split("").pop())) return;
    setresulttext(resultText + text)
  }
  const calculation=()=>{
    setcalculationtext(eval(resultText))
  }
  return (
    <View style={styles.container}>
      <View style={styles.calculation}><Text style={styles.caltext}>{calculationtext}</Text></View>
      <View style={styles.result}><Text style={styles.resulttext}>{resultText}</Text></View>
      <View style={styles.button}>
        <View style={styles.number}>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>{onbtnclick(1)}}>
              <Text style={styles.btn}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onbtnclick(2)}}>
              <Text style={styles.btn}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onbtnclick(3)}}>
              <Text style={styles.btn}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>{onbtnclick(4)}}>
              <Text style={styles.btn}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onbtnclick(5)}}>
              <Text style={styles.btn}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onbtnclick(6)}}>
              <Text style={styles.btn}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>{onbtnclick(7)}}>
              <Text style={styles.btn}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onbtnclick(8)}}>
              <Text style={styles.btn}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onbtnclick(9)}}>
              <Text style={styles.btn}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>{onbtnclick(".")}}>
              <Text style={styles.btn}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onbtnclick(0)}}>
              <Text style={styles.btn}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onbtnclick("=")}}>
              <Text style={styles.btn}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operation}>
          <TouchableOpacity onPress={()=>{onoperationclick("DEL")}}>
            <Text style={styles.operationtext}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onoperationclick("AC")}}>
            <Text style={styles.operationtext}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onoperationclick("+")}}>
            <Text style={styles.operationtext}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onoperationclick("-")}}>
            <Text style={styles.operationtext}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onoperationclick("*")}}>
            <Text style={styles.operationtext}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onoperationclick("/")}}>
            <Text style={styles.operationtext}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    backgroundColor: "grey",
    flex: 1,
    alignItems:"flex-end",
    justifyContent:"center",
  },
  calculation: {
    flex: 1,
    backgroundColor: "#bc7676",
    alignItems:"flex-end",
    justifyContent:"center",
  },
  button: {
    flex: 7,
    flexDirection:"row",
  },
  number: {
    flex: 3,
    backgroundColor: "#685c5c",
  },
  operation: {
    backgroundColor: "#c4a8a8",
    flex: 1,
    justifyContent:"space-around",
    alignItems:"center",
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    flex:1,
  },
  btn:{
    fontSize:20,
    color:"white",
  },
  resulttext:{
    fontSize:20,
    fontWeight:"bold",
  },
  caltext:{
    fontSize:20,
    color:"white",
    fontWeight:"bold",
  },
  operationtext:{
    fontSize:20,
    color:"white",
    fontWeight:"bold",
  },

});

