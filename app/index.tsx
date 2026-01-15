import React from "react"
import "../global.css"
import { Redirect } from "expo-router"
import { useAuth } from "@/hooks/useAuth"
import { ActivityIndicator, View } from "react-native"

const Index = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      // style danna
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size={"large"} color={"#0000ff"} />
      </View>
    )
  }

  if (user) {
    return <Redirect href={"/home"} />
  } else {
    return <Redirect href={"/login"} />
  }

}

export default Index
