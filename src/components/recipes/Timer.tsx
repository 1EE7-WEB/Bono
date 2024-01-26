import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Pause, Play, RotateCcw } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useStopwatch, useTimer } from "react-timer-hook";

export default function TimerCountdown() {
  const [minutesState, setMinutesState] = useState(0);
  const [secondsState, setSecondsState] = useState(0);

  const time = new Date();

  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: time,
      onExpire: () => console.warn("onExpire called"),
    });

  return (
    <div className="my-auto flex  aspect-square h-[90%] items-center justify-center gap-12 rounded-full border-8 border-primary p-6 lg:p-0">
      <div className="flex w-full flex-col items-center justify-center">
        <p className="mb-auto  text-xl  text-muted-foreground">Alarm</p>
        <Popover>
          <PopoverTrigger onClick={pause} asChild>
            <div className="mb-4 cursor-pointer text-8xl">
              <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4 ">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Set alarm </h4>
                <p className="text-sm text-muted-foreground">
                  Set how long you want the alarm to be.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="Minutes">Minutes</Label>
                  <Input
                    onChange={(e) => setMinutesState(parseInt(e.target.value))}
                    type="number"
                    id="Minutes"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="Seconds">Seconds</Label>
                  <Input
                    onChange={(e) => setSecondsState(parseInt(e.target.value))}
                    type="number"
                    id="Seconds"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <Button
                onClick={() => {
                  const time = new Date();
                  time.setSeconds(
                    time.getSeconds() + minutesState * 60 + secondsState,
                  );
                  restart(time);
                }}
                size={"sm"}
              >
                Save
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <div className="  flex w-[98%] items-center  justify-center gap-4 border-t-4 border-t-input p-6 py-4 lg:p-4">
          <Button className="active:scale-95" variant="ghost" onClick={pause}>
            <Pause size={32} />
          </Button>
          <Button className="active:scale-95" variant="ghost" onClick={resume}>
            <Play size={32} />{" "}
          </Button>

          <Button
            className="active:scale-95"
            variant="ghost"
            onClick={() => {
              const time = new Date();
              time.setSeconds(
                time.getSeconds() + minutesState * 60 + secondsState,
              );
              restart(time);
            }}
          >
            <RotateCcw size={32} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Stopwatch() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch();
  function formatTime(inputTime: string) {
    const [minutes, seconds] = inputTime.split(":");

    // Add leading zero if the hour has only one digit
    const formattedHours = minutes?.length === 1 ? `0${minutes}` : minutes;

    // Return the formatted time
    return `${formattedHours}:${minutes}`;
  }

  const formattedTime = formatTime(`${minutes}:${seconds}`);

  console.log(formattedTime); // Output: "04:16"

  return (
    <div className="my-auto flex aspect-square h-[90%]  items-center justify-center rounded-full border-8 border-teal-400">
      <div className="flex w-full flex-col items-center justify-center">
        <p className="mb-auto  text-xl  text-muted-foreground">Stopwatch</p>
        <div className="mb-4 text-8xl">
          {hours > 0 ? <span>{hours}:</span> : null}
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>

        <div className="  flex w-[98%] items-center  justify-center gap-4 border-t-4 border-t-input py-4">
          <Button className="active:scale-95" variant="ghost" onClick={pause}>
            <Pause size={32} />
          </Button>
          <Button className="active:scale-95" variant="ghost" onClick={start}>
            <Play size={32} />{" "}
          </Button>

          <Button
            className="active:scale-95"
            variant="ghost"
            onClick={() => {
              reset(), pause();
            }}
          >
            <RotateCcw size={32} />
          </Button>
        </div>
      </div>
    </div>
  );
}

// const CircularProgress = ({ progress, children }) => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const updateDimensions = () => {
//       if (containerRef.current) {
//         const { offsetWidth, offsetHeight } = containerRef.current;
//         setDimensions({ width: offsetWidth, height: offsetHeight });
//       }
//     };

//     window.addEventListener("resize", updateDimensions);
//     updateDimensions();

//     return () => {
//       window.removeEventListener("resize", updateDimensions);
//     };
//   }, []);

//   const normalizedProgress = Math.min(Math.max(progress, 0), 100);
//   const dashOffset = 100 - normalizedProgress;
//   const fontSize = dimensions.width * 0.15; // Adjust the multiplier as needed

//   return (
//     <div ref={containerRef} className="relative inline-block">
//       <svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 100 100"
//         className="absolute inset-0"
//       >
//         <circle
//           cx="50%"
//           cy="50%"
//           r="48%"
//           fill="transparent"
//           stroke="#ccc"
//           strokeWidth="4"
//         />
//         <circle
//           className="progress-circle"
//           cx="50%"
//           cy="50%"
//           r="48%"
//           fill="transparent"
//           stroke="#007bff"
//           strokeWidth="4"
//           strokeDasharray="300"
//           strokeDashoffset={dashOffset}
//           transform="rotate(-90 50 50)"
//         />
//       </svg>
//       <div
//         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-xl font-bold"
//         style={{ fontSize }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };
