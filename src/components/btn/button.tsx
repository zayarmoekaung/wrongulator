import OperatorBtn from "./operator";
import ParenthesisBtn from "./parenthesis";
import NumberBtn from "./number";
import ControlBtn from "./control";
import { NodeType } from "../../types/nodeType";

export default function Button({ type, value, callback }: { type: NodeType; value: string; callback?: () => void }) {
    switch (type) {
        case NodeType.NUMBER:
            return <NumberBtn value={value} />;
        case NodeType.OPERATOR:
            return <OperatorBtn value={value} />;
        case NodeType.PARENTHESIS:
            return <ParenthesisBtn value={value} />;
        case NodeType.CONTROL:
            return <ControlBtn value={value} />;
        default:
            return (
                <view bindtap={callback} class={type + ' btn'}>
                    <text>{value}</text>
                </view>
            );
    }
}