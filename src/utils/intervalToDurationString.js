import { intervalToDuration } from "date-fns";

export const intervalToDurationString = ({ start, end }) => {
  const startDate = start ? new Date(start) : new Date();
  const endDate = end ? new Date(end) : new Date();

  const { days, hours, minutes, seconds } = intervalToDuration({
    start: startDate,
    end: endDate,
  });
  const daysString = days ? `${days}d ` : "";
  const hoursString = hours ? `${hours}h ` : "";
  const minutesString = minutes ? `${minutes}m ` : "";
  const secondsString = seconds ? `${seconds}s ` : "";
  return `${daysString}${hoursString}${minutesString}${secondsString}`;
};
