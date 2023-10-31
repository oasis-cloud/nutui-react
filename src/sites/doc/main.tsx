import React, { FunctionComponent } from 'react'
import * as ReactDOM from 'react-dom/client'
import { isMobile } from '@/sites/assets/util'
import '@/sites/assets/styles/reset.scss'
import '@/styles/theme-default.scss'
import '@/sites/assets/styles/md-style.scss'
import App from './App'
import {MDXProvider} from '@mdx-js/react'

const modules = import.meta.glob('@/packages/button/demos/*.tsx', { as: 'raw', eager: true })



if (isMobile) {
  location.replace('demo.html')
}

const CodeBlock: FunctionComponent = (props) => {
  return <>{modules['/src/packages/' + props.src]}</>
}

const components = {
  CodeBlock
}

const rootElement = document.querySelector('#doc')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <MDXProvider components={components}>
      <App />
    </MDXProvider>
  )
  // root.render(<App />)
}
