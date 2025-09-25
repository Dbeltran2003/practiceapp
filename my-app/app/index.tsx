import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);
  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }
  
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
    setEnteredGoalText('');
  }
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.intputContainer}>
        <TextInput style={styles.textInput} 
        placeholder='Your course goal!' 
        onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  intputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc' 
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc', 
    width: '70%',      
    marginRight: 8, 
    padding: 8
    },
    goalsContainer: {
      flex: 5
    }

});
