import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { theme } from '../styles/theme';

function FlatListHeaderComponent({ colors }: { colors?: typeof theme.light }) {
  const { text } = colors ?? theme.light
  return (
    <View>
      <Text style={[styles.header,
      { color: text }
      ]}>Minhas tasks</Text>
    </View >

  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  colors?: typeof theme.light
}

export function MyTasksList({ tasks, onLongPress, onPress, colors }: MyTasksListProps) {
  const { text, textDone, header } = colors  ?? theme.light
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            //DONE - use onPress, onLongPress and style props
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done ? styles.taskButtonDone : styles.taskButton}
          >
            <View
              testID={`marker-${index}`}
              //DONE - use style prop
              style={item.done ? [styles.taskMarkerDone, { backgroundColor: header }] : styles.taskMarker}
            />
            <Text
              //DONE - use style prop
              style={item.done ? [styles.taskTextDone, { color: textDone }] : { color: text }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent colors={colors!} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})
