import { useSyntax } from "../../stores/useSyntax";
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
        const tree = useSyntax.getState().syntaxTree || [];
        const newTree = pushToTree(tree, newNode);
        useSyntax.getState().setSyntaxTree(newTree);
    }

    return (
        <view bindtap={handleTap} class={'operator btn'}>
            <text>{value}</text>
        </view>
    )
}