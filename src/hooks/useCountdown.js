import { intervalToDurationString } from "@/utils/intervalToDurationString";
import { useEffect, useState } from "react";

export const useCountdown = ({ start, end }) => {
  const [countDown, setCountDown] = useState(
    intervalToDurationString({ start, end })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(intervalToDurationString({ start, end }));
    }, 1000);

    return () => clearInterval(interval);
  }, [start, end]);

  return { countDown };
};
