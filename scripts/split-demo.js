const fsm = require('fs/promises')
const configJson = require('../src/config.json')
const path = require('path')

// const components = configJson.nav.reduce(
//   (pre, o) => [...pre, ...o.packages.filter((p) => p.show)],
//   []
// )

const components = [
  {
    version: '2.0.0',
    name: 'Button',
    type: 'component',
    cName: '按钮',
    desc: '按钮',
    sort: 1,
    show: true,
    taro: true,
    author: '',
  },
]

components.forEach((component) => {
  const basePath =
    'src/packages/' + component.name.toLowerCase() + '/' + 'doc.md'
  const demoBasePath =
    'src/packages/' + component.name.toLowerCase() + '/' + 'demo.tsx'

  fsm.readFile(basePath, 'utf8').then((markdownContent) => {
    const MarkdownIt = require('markdown-it')()
    const sources = MarkdownIt.parse(markdownContent, {})
    fsm.readFile(demoBasePath, 'utf8').then((tsxContent) => {
      const zhCN = tsxContent.match(/'(zh-CN)': \{([^}]+)\}/g)
      const zhTW = tsxContent.match(/'(zh-TW)': \{([^}]+)\}/g)
      const enUS = tsxContent.match(/'(en-US)': \{([^}]+)\}/g)
      const zhCN_JSON = eval(`a = { ${zhCN[0]} }['zh-CN']`)
      const zhTW_JSON = eval(`a = { ${zhTW[0]} }['zh-TW']`)
      const enUS_JSON = eval(`a = { ${enUS[0]} }['en-US']`)

      function findTitleKey(title) {
        for (let key in zhCN_JSON) {
          if (zhCN_JSON[key] === title) return key
        }
      }

      function write2demoIndex(code, componentName, index) {
        // 生成 demos 下的 filename
        const targetDir = path.join(process.cwd(), `scr/packages/${componentName}/demos`)
        const basePath = `demo${index}.tsx`
        fsm.mkdir(targetDir, { recursive: true }).then(() => {
          fsm.writeFile(path.join(targetDir, basePath), code)
        })
      }

      function write2doc(filenames) {
        // 在 demo.tsx 中生成内容
      }

      sources.forEach((source, index) => {
        if (source.type === 'fence' && source.tag === 'code') {
          const code = source.content
          let begin = index
          let currentNode = source
          while (
            !(currentNode.type == 'heading_open' && currentNode.tag == 'h3')
          ) {
            currentNode = sources[--begin]
            if (begin === 0 || !currentNode) break
          }
          if (begin !== 0) {
            if (sources[begin + 1]) {
              const codeTitle = sources[begin + 1].content
              // const key = findTitleKey(codeTitle)
              write2demoIndex(code, component.name.toLowerCase(), index)
            }
          }
        }
      })
      write2doc(sources)
    })
  })
})
