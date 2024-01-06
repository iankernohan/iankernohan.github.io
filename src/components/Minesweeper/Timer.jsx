import { useEffect } from "react";

export default function Timer({ dispatch, time }) {
  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "incrementTimer" }), 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  let formatedTime;

  if (time < 10) formatedTime = `00${time}`;
  else if (time < 100) formatedTime = `0${time}`;
  else formatedTime = time;

  return <>{formatedTime}</>;
}
