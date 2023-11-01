import React, { FunctionComponent } from 'react'
import hljs from 'highlight.js'
import DemoBlock from './demoblock'
import './demoblock.scss'

const modules = import.meta.glob('@/packages/**/demos/*.tsx', {
  as: 'raw',
  eager: true,
})
console.log('modules', modules)
const CodeBlock: FunctionComponent = (props: { src?: string }) => {
  console.log(props)
  const originCode = modules['/src/packages/' + props.src]
  const highlightedCode = hljs.highlightAuto(originCode).value
  return (
    <DemoBlock text={originCode} scss="">
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </DemoBlock>
  )
}

export default CodeBlock
