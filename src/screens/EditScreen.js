import React, { useContext } from "react"
import { StyleSheet, View, Text } from "react-native"
import { Context } from "../context/BlogContext"
import BlogPostForm from "../components/BlogPostForm"

const EditScreen = ({ navigation }) => {
  const blogPostId = navigation.getParam("id")
  const { state, editBlogPost } = useContext(Context)

  const blogPost = state.find((post) => post.id == blogPostId)

  return (
    <View>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) =>
          editBlogPost(blogPostId, title, content, () => navigation.goBack())
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditScreen
