import { useSyntax } from "../../stores/useSyntax";
import { useResult } from "../../stores/useResult";
import calculateSyntaxTree from "../../utils/calculate";
import { popFromTree } from "../../utils/syntaxTree";
import { NodeType } from "../../types/nodeType";
export default function ControlBtn({ value }: { value: string }) {
    const handleTap = () => {
        if (value === '=' || value === 'AC' || value === 'Del') {
            switch (value) {
                case '=':
                    const result = calculateSyntaxTree(useSyntax.getState().syntaxTree || []).toString();
                    const newNode = {
                        type: NodeType.NUMBER,
                        value: result,
                    };
                    useSyntax.getState().setSyntaxTree([newNode]);
                    useResult.getState().clearResult();
                    break;
                case 'AC':
                    useSyntax.getState().setSyntaxTree([]);
                    useResult.getState().clearResult();
                    break;
                case 'Del':
                    const tree = useSyntax.getState().syntaxTree || [];
                    const newTree = popFromTree(tree);
                    useResult.getState().setResult(calculateSyntaxTree(newTree).toString());
                    useSyntax.getState().setSyntaxTree(newTree);
                    break;
            }
        }
    }

    return (
        <view bindtap={handleTap} class={'control btn'}>
            <text>{value}</text>
        </view>
    )
}