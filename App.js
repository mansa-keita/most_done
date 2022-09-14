import {
  StyleSheet,
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [textinpt, setTextinput] = useState("");
  const [goalTaks, setGoalTask] = useState([]);

  const textHandler = (textenterd) => {
    setTextinput(textenterd);
  };

  const addHanler = () => {
    setGoalTask((coursetTogo) => [
      ...coursetTogo,
      { text: textinpt, id: Math.random().toString() },
    ]);
  };

  const deleteItem = (id) => {
    const newList = goalTaks.filter((itemData) => itemData.id !== id);
    setTextinput(goalTaks);
  };

  return (
    <View style={styles.containerApp}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.container}>
          <TextInput
            value={textinpt}
            placeholder="set your task"
            onChangeText={textHandler}
          />
        </View>

        <View style={{ marginTop: 40, height: 50 }}>
          <Button title="add task" onPress={addHanler} />
        </View>
      </View>

      <View>
        <FlatList
          data={goalTaks}
          renderItem={(itemData) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderColor: "gray",
                  borderWidth: 2,
                  height: 50,
                  marginTop: 10,
                  marginLeft: 30,
                }}
              >
                <Text>{itemData.item.text}</Text>
                <TouchableOpacity onPress={() => deleteItem(itemData.id)}>
                  <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
        {/* {goalTaks.map((item) => (
          <View>
            <Text key={id} style={{}}>
              {item}
            </Text>
            <TouchableOpacity>
              <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ))} */}
        {/* <Text style={{}}>List of item</Text>
        <TouchableOpacity>
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "70%",
    height: 50,
    backgroundColor: "#d9e3f0",
    marginLeft: 30,
    justifyContent: "center",
    borderRadius: 5,
  },
});
