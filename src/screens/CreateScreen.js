import React, { useContext, useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Context } from "../context/BlogContext"

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const { addBlogPost } = useContext(Context)

  const handleCreateBlogPost = () => {
    addBlogPost(title, content, () => navigation.navigate("Index"))
  }

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
      />
      <Button title="Add Blog Post" onPress={handleCreateBlogPost} />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    marginBottom: 15,
    padding: 5,
  },
})

export default CreateScreen
