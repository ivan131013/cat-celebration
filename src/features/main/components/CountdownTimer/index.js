import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { noBallsDate } from "../../../../services/consts/consts";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(noBallsDate), 1000);

    return () => getTimeUntil(noBallsDate);
  }, [noBallsDate]);

  return (
    <Heading
      fontSize={"6rem"}
      fontWeight={"800"}
      color={"#faf4d9"}
      fontFamily={"Ubuntu Condensed"}
    >
      {days} дні {hours} годин {minutes} хвилин {seconds} секунд
    </Heading>
  );
};

export default CountdownTimer;
