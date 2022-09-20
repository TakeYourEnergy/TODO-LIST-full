import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useAppSelector } from "../..";

const Spinner = () => {
  const load = useAppSelector((state) => state.todosReducer.loading);

  return <BeatLoader color="rgb(93, 93, 255)" loading={load} />;
};

export default Spinner;
