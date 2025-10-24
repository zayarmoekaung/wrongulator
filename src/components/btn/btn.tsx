import { useState } from "react";
import { useCalculate } from "../../stores/useCalculate";
import calculateSyntaxTree from "../../utils/calculate";
import { useHistory } from "../../stores/useHistory";
import { useResult } from "../../stores/useResult";
import './btn.style.css';

export default function Btn({ value, type }: { value: string, type: 'number' | 'operator' | 'parenthesis' }) {
    const addValueToSyntaxTree = useCalculate((state) => state.addValueToSyntaxTree);
    const clearSyntaxTree = useCalculate((state) => state.clearSyntaxTree);
    const addToHistory = useHistory((state) => state.addToHistory);
    const setResult = useResult((state) => state.setResult);
    const clearResult = useResult((state) => state.clearResult);
    const [isPressed, setIsPressed] = useState(false);
    const handleTap = () => {
        if (type === 'parenthesis' && value === '()') {
            if (isPressed) {
                setIsPressed(false);
                value = ')';
            } else {
                setIsPressed(true);
                value = '(';
            }
        } else if (type === 'operator') {
            setIsPressed(false);
            if (value === '=' || value === 'AC' || value === 'Del') {
                switch (value) {
                    case '=':
                        setResult(calculateSyntaxTree(useCalculate.getState().syntaxTree || []).toString());
                        addToHistory(useCalculate.getState().syntaxTree || []);
                        break;
                    case 'AC':
                        clearSyntaxTree();
                        clearResult();
                        break;
                    case 'Del':
                        break;
                }
                return
            }
            setResult(calculateSyntaxTree(useCalculate.getState().syntaxTree || []).toString());
        }
        const newNode = {
            type,
            value,
        };
        addValueToSyntaxTree(newNode);
    };

    return (
        <view bindtap={handleTap} class={type + ' btn'}>
            <text>{value}</text>
        </view>
    )
}