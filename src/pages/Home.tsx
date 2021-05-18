import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //DONE - add new task if it's not empty
    if (newTaskTitle === '') return
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks(prev => [...prev, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    //DONE - mark task as done if exists
    const doneTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      } else {
        return task
      }
    })
    setTasks(doneTasks)
  }

  function handleRemoveTask(id: number) {
    //DONE - remove task from state
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <>
      <Header />
      <TodoInput addTask={handleAddTask} />
      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}
