import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { theme } from '../styles/theme';

interface TodoInputProps {
  addTask: (task: string) => void;
  colors?: typeof theme.light
}

export function TodoInput({ addTask, colors }: TodoInputProps) {
  const [task, setTask] = useState('')
  const { input, text, button } = colors ?? theme.light

  function handleAddNewTask() {
    if (task === '') return
    //DONE - Call addTask and clean input value
    addTask(task)
    setTask('')
  }



  return (
    <View style={[styles.inputContainer, { backgroundColor: input }, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput
        style={[styles.input, { backgroundColor: input, color: text }]}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={text}
        returnKeyType="send"
        //DONE - use value, onChangeText and onSubmitEditing props
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, { backgroundColor: button }]}
        //DONE - onPress prop
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
