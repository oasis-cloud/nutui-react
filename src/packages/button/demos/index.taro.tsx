import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import '@/packages/button/demo.scss'
import lang from './lang'
import Demo1 from '@/packages/button/demos/h5/primary'

const ButtonDemo = () => {
  const [translated] = useTranslate(lang)

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.xxx}</h2>
        <Demo1 translated={translated} />
      </div>
    </>
  )
}

export default ButtonDemo
