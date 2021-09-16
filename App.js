import React, { useState } from 'react';
import {
  Text,
  TouchableHighlight,
  Button,
  Alert
} from 'react-native';
import {
  BaseView, Keys, NumBox, Row, TextBox, NumText
} from './styles'
const symbol = ['=', '*', '/', '%', '-', '+']
const data = ['C', '/', '*', '<', '9', '8', '7', '+', '6', '5', '4', '-', '3', '2', '1', '%', '0', '00', '.', '=']
const App = () => {
  const [val, setVal] = useState("")
  const [history, setHistory] = useState([])
  const onChange = (e) => {
    if (e === "C")
      setVal('')
    else if (e === "<")
      setVal(val => val.toString().substr(0, val.length - 1))
    else if (e === "=") {
      if (symbol.includes(val[val.length - 1]))
        Alert.alert("Error", "Don't calculate with end of operator")
      else {
        setHistory(oldArray => [...oldArray, val])
        setVal(val => eval(val))
      }
    }
    else
      setVal(val => val + e)
  }
  return (
    <BaseView>
      <TextBox>
        <Text style={{ fontSize: 50, color: '#ffffff', fontWeight: '700' }}>{val ? val : 0}</Text>
      </TextBox>
      <NumBox>
        <Row>
          {
            data?.map((value, index) => (
              <TouchableHighlight onPress={() => onChange(value)}>
                <Keys bg={`${index < 4 || index % 4 === 3 ? "gray" : ""}`} key={value}>
                  <NumText>{value}</NumText>
                </Keys>
              </TouchableHighlight>
            ))
          }
        </Row>

      </NumBox>
      <Button
        title="History"
        color="#777"
        onPress={async () => {
          let a = ""
          history.map(e => a += `${e}=${eval(e)} \n`)
          Alert.alert("History", a)
        }
        }
      />
    </BaseView >
  )
}

export default App;
