import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { isMobile } from '@/sites/assets/util'
import CodeBlock from './components/demoblock/codeblock'
import '@/sites/assets/styles/reset.scss'
import '@/styles/theme-default.scss'
import '@/sites/assets/styles/md-style.scss'

if (isMobile) {
  location.replace('demo.html')
}

const components = {
  CodeBlock,
}

const rootElement = document.querySelector('#doc')
if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <MDXProvider components={components}>
      <App />
    </MDXProvider>
  )
}
