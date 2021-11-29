import { useState } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState({
    name: props.name,
    time: 0,
    isRunning: false,
  });
  return (
    <div>
      {timer.name} {timer.time}
    </div>
  );
};

export default Timer;
