import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Bakiye from './components/Bakiye';
import PrizeList from './components/PrizeList'

const App = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Bakiye />
      <PrizeList />
    </ScrollView>
  );
}


export default App;