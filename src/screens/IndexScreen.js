import React, { useContext, useEffect } from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native"
import { Context as BlogContext } from "../context/BlogContext"
import { Feather } from "@expo/vector-icons"

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext)

  // useEffect does not run when you navigate to/from a screen using React Navigation because the screen is always there in the stack even if you don't see it
  useEffect(() => {
    getBlogPosts()

    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts()
    })

    return () => listener.remove()
  }, [])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost, idx) => idx}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Edit", { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash-2" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  }
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
