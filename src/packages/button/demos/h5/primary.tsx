import React from 'react'
import { Button } from '@nutui/nutui-react'

const App = (props: any) => {
  const { translated } = props

  return (
    <>
      <Button type="primary">{translated.endssdf}</Button>
      <Button type="info">信息按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="success">成功按钮</Button>
    </>
  )
}
export default App
