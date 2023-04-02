import React, { useContext } from "react"
import { FlatList, StyleSheet, Text, View, Button } from "react-native"
import { Context as BlogContext } from "../context/BlogContext"

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext)
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost, idx) => idx}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
