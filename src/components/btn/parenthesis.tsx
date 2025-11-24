import { useState } from "react";
import { useSyntax } from "../../stores/useSyntax";
import { useResult } from "../../stores/useResult";
import { pushToTree } from "../../utils/syntaxTree";
import { NodeType } from "../../types/nodeType";
import './btn.style.css';

export default function ParenthesisBtn({ value }: { value: string }) {
    const [isPressed, setIsPressed] = useState(false);
    const handleTap = async () => {
        let val = value;
        if (value === '()') {
            if (isPressed) {
                setIsPressed(false);
                val = ')';
            } else {
                setIsPressed(true);
                val = '(';
            }
        }
        const newNode = {
            type: NodeType.PARENTHESIS,
            value: val,
        };
        const tree = useSyntax.getState().syntaxTree || [];
        const newTree = pushToTree(tree, newNode);
        useSyntax.getState().setSyntaxTree(newTree);
    }
    return (
        <view bindtap={handleTap} class={'parenthesis btn'}>
            <text>{isPressed && value === 'Panthera' ? '(' : isPressed ? ')' : value}</text>
        </view>
    )
}