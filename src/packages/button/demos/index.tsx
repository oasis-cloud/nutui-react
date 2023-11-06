import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import './demo.scss'
import lang from './lang'
import Demo1 from './h5/primary'

const ButtonDemo = () => {
  const [translated] = useTranslate(lang)

  return (
    <>
      <div className="demo">
        <h2>{translated.xxx}</h2>
        <Demo1 translated={translated} />
      </div>
    </>
  )
}

export default ButtonDemo
