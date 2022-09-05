import React from "react";
import { Card } from "./components/card/Card";
import * as st from "./components/global/GeneralStyle";
import data from "./constants/data.json";

export const App = () => {
  return (
    <st.Container>
      <st.Title>Cards and timer</st.Title>
      {data.map((item) => (
        <Card info={item} />
      ))}
    </st.Container>
  );
};
