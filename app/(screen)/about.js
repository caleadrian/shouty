import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useRouter } from 'expo-router'

const index = () => {
  const {back} = useRouter()

  return (
    <View>
      <Link href={back}>Back</Link>
      <Text>about</Text>
    </View>
  )
}

export default index