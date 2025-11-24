import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import { useCalculate } from './stores/useCalculate'
import { useResult } from './stores/useResult'
import Button from './components/btn/button'
import Title from './components/title/title'
import parseSyntaxTree from './utils/syntaxParser'
import { NodeType } from './types/nodeType'
export function App(props: {
  onRender?: () => void
}) {
  const [alterLogo, setAlterLogo] = useState(false)
  const { syntaxTree } = useCalculate()
  const { result } = useResult()
  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])
  props.onRender?.()

  const onTap = useCallback(() => {
    'background only'
    setAlterLogo(prevAlterLogo => !prevAlterLogo)
  }, [])

  return (
    <view>
      <view className='App'>
        <view className='Banner'>
          <Title />
        </view>
        <view className='SyntaxContainer'>
          <text className='Syntax'>{parseSyntaxTree(syntaxTree)}</text>
        </view>
        <view className='Result'>
          <text className='ResultText'>{result !== null ? `= ${result}` : '0'}</text>
        </view>
        <view className='Content'>
          <view className='ButtonGrid'>
            <Button value="AC" type={NodeType.CONTROL} />
            <Button value="7" type={NodeType.NUMBER} />
            <Button value="4" type={NodeType.NUMBER} />
            <Button value="1" type={NodeType.NUMBER} />
            <Button value="0" type={NodeType.NUMBER} />
          </view>
          <view className='ButtonGrid'>
            <Button value="()" type={NodeType.PARENTHESIS} />
            <Button value="8" type={NodeType.NUMBER} />
            <Button value="5" type={NodeType.NUMBER} />
            <Button value="2" type={NodeType.NUMBER} />
            <Button value="." type={NodeType.NUMBER} />
          </view>
          <view className='ButtonGrid'>
            <Button value="%" type={NodeType.OPERATOR} />
            <Button value="9" type={NodeType.NUMBER} />
            <Button value="6" type={NodeType.NUMBER} />
            <Button value="3" type={NodeType.NUMBER} />
            <Button value="Del" type={NodeType.CONTROL} />
          </view>
          <view className='ButtonGrid'>
            <Button value="/" type={NodeType.OPERATOR} />
            <Button value="*" type={NodeType.OPERATOR} />
            <Button value="-" type={NodeType.OPERATOR} />
            <Button value="+" type={NodeType.OPERATOR} />
            <Button value="=" type={NodeType.CONTROL} />
          </view>
        </view>
      </view>
    </view>
  )
}
