import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"

const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

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
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
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

export default BlogPostForm
