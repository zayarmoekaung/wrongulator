import { useWrongulate } from "../../stores/useWrongulate";
import './title.style.css';

export default function Title() {
    const { isWrongulated } = useWrongulate();
    const handleTap = () => {
        useWrongulate.getState().toggleWrongulate();
    }
    return (
        <view className="Title">
            <text className="TitleText" bindtap={handleTap}>{isWrongulated ? 'Wrongulator' : 'Calculator'}</text>
        </view>
    )
}