import React, { createRef, FunctionComponent, useEffect } from 'react'

type UtterancesAttributeType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const src = 'https://utteranc.es/client.js'
const repo = 'heo-it/heo-it.github.io'

const Comment: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current == null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributeType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return <div ref={element} />
}

export default Comment