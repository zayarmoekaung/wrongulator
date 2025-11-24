import { useCalculate } from "../../stores/useCalculate";
import { pushToTree } from "../../utils/syntaxTree";
import { useResult } from "../../stores/useResult";
import { NodeType } from "../../types/nodeType";
import './btn.style.css';

export default function OperatorBtn({ value }: { value: string }) {
    const handleTap = () => {
        const newNode = {
            type: NodeType.OPERATOR,
            value,
        };
        const tree = useCalculate.getState().syntaxTree || [];
        const newTree = pushToTree(tree, newNode);
        useCalculate.getState().setSyntaxTree(newTree);
    }

    return (
        <view bindtap={handleTap} class={'operator btn'}>
            <text>{value}</text>
        </view>
    )
}