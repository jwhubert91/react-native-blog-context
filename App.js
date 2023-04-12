import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { Provider as BlogProvider } from "./src/context/BlogContext"

// Screens
import IndexScreen from "./src/screens/IndexScreen"
import ShowScreen from "./src/screens/ShowScreen"
import CreateScreen from "./src/screens/CreateScreen"
import EditScreen from "./src/screens/EditScreen"

const navigator = createStackNavigator(
  {
    // index screen first
    Index: IndexScreen,
    // remaining screen alphabetized
    Create: CreateScreen,
    Show: ShowScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}
