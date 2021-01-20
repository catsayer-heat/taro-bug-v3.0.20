import React, { useState, useEffect } from 'react'
import { View, Button } from '@tarojs/components'

const Page: React.FC = () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(1)

  useEffect(() => {
    console.log(`a:${a}, b:${b}`)
  }, [a, b])
  
  return (
    <React.Fragment>
      <View>bug1: react batchEventsUpdated的问题</View>
      <Button
        onClick={() => {
          console.log('我只点击了一次')
          setA(a + 1)
          setB(b + 1)
        }}
      >
        bug1（version 3.0.24 已fix）
      </Button>
    </React.Fragment>
  )
}

export default Page