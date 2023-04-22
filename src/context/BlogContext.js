import createDataContext from "./createDataContext"
import jsonServer from "../api/jsonServer"

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id == action.payload.id ? action.payload : blogPost
      })
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload)
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ]
    default:
      return state
  }
}

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts")

    dispatch({ type: "get_blogposts", payload: response.data })
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } })
    !!callback && callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id })
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    })
    !!callback && callback()
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
)
