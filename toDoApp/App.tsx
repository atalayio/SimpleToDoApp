import React from 'react';
import type { PropsWithChildren } from 'react';
import Task from "./components/Task"
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App(): JSX.Element {
  const [task, setTask] = useState<string | null>(null);
  const [taskItems, setTaskItems] = useState<string[]>([]);

  const handleAddTask = () => {
    
    if (task && task.trim() !== '') {
      setTaskItems([...taskItems, task]);
      setTask(null);
      
    }
  }


  const completeTask = (index: any) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <View style={styles.container} >
      <View style={styles.tasks} >
        <Text style={styles.section} > Bugünün Yapılacakları </Text>



        <View style={styles.item} >
        {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Yapılacakları yazınız.'} value={task || ''} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    </TouchableWithoutFeedback>
    
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tasks: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  section: {
    fontSize: 24,
    color: "black",
    fontFamily: "Ubuntu-Bold",
  },
  item: {

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'grey',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
  },
  addText: {},


});

export default App;
