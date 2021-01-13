import React, { useState, useEffect } from 'react'
import { Button } from '@tarojs/components'

const Page: React.FC = () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(1)

  useEffect(() => {
    console.log(`a:${a}, b:${b}`)
  }, [a, b])
  
  return (
    <Button
      onClick={() => {
        console.log('我只点击了一次')
        setA(a + 1)
        setB(b + 1)
      }}
    >
      点击此处
    </Button>
  )
}

export default Page