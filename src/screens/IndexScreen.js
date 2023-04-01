import React, { useContext } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import BlogContext from "../context/BlogContext"

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext)
  return (
    <View>
      <Text>IndexScreen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost, idx) => idx}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
