import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import { useCalculate } from './stores/useCalculate'
import { useResult } from './stores/useResult'
import Btn from './components/btn/btn'
import parseSyntaxTree from './utils/syntaxParser'
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
          <text className='Title'>Wrongulator</text>
        </view>
        <view className='SyntaxContainer'>
          <text className='Syntax'>{parseSyntaxTree(syntaxTree)}</text>
        </view>
        <view className='Result'>
          <text className='ResultText'>{result !== null ? `= ${result}` : '0'}</text>
        </view>
        <view className='Content'>
          <view className='ButtonGrid'>
            <Btn value="AC" type="operator" />
            <Btn value="7" type="number" />
            <Btn value="4" type="number" />
            <Btn value="1" type="number" />
            <Btn value="0" type="number" />
          </view>
          <view className='ButtonGrid'>
            <Btn value="()" type="parenthesis" />
            <Btn value="8" type="number" />
            <Btn value="5" type="number" />
            <Btn value="2" type="number" />
            <Btn value="." type="number" />
          </view>
          <view className='ButtonGrid'>
            <Btn value="%" type="operator" />
            <Btn value="9" type="number" />
            <Btn value="6" type="number" />
            <Btn value="3" type="number" />
            <Btn value="Del" type="operator" />
          </view>
          <view className='ButtonGrid'>
            <Btn value="/" type="operator" />
            <Btn value="*" type="operator" />
            <Btn value="-" type="operator" />
            <Btn value="+" type="operator" />
            <Btn value="=" type="operator" />
          </view>
        </view>
      </view>
    </view>
  )
}
