import useCountdown from "../hooks/useCountdown";
import { BombIcon, ClockIcon } from "./Icons";

export default function DealTimer({ className = "", icon = "clock" }) {
  const text = useCountdown();
  return (
    <span className={`timer-pill ${className}`}>
      {icon === "bomb" ? <BombIcon /> : <ClockIcon />}
      <span>{text}</span>
    </span>
  );
}
