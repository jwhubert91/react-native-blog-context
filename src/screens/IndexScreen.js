import React, { useContext } from "react"
import { FlatList, StyleSheet, Text, View, Button } from "react-native"
import { Context as BlogContext } from "../context/BlogContext"
import { Feather } from "@expo/vector-icons"

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext)
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost, idx) => idx}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <Feather style={styles.icon} name="trash-2" />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
})

export default IndexScreen
