import { useSyntax } from "../../stores/useSyntax";
import { NodeType } from "../../types/nodeType";
import { pushToTree } from "../../utils/syntaxTree";
import { useResult } from "../../stores/useResult";
import calculateSyntaxTree from "../../utils/calculate";
import './btn.style.css';

export default function NumberBtn({ value }: { value: string }) {    
    const setResult = useResult((state) => state.setResult);
    const handleTap = () => {
        const newNode = {
            type: NodeType.NUMBER,
            value,
        };
        const tree = useSyntax.getState().syntaxTree || [];
        const newTree = pushToTree(tree, newNode);
        useSyntax.getState().setSyntaxTree(newTree);
        setResult(calculateSyntaxTree(newTree).toString());
    }

    return (
        <view bindtap={handleTap} class={'number btn'}>
            <text>{value}</text>
        </view>
    )
}