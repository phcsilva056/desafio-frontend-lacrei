import React, { useState } from "react";
import * as st from "./style";

export const Card = ({ info }) => {
  const [bgTimer, setBgTimer] = useState(false);
  setTimeout(() => setBgTimer(true), info.timer);
  return (
    <st.CardColor info={info} bgTimer={bgTimer}>
      {!bgTimer && <st.Loading color={info.loadingColor} />}
      {bgTimer && <st.showTimer>{`Timer: ${info.timer}ms `}</st.showTimer>}
    </st.CardColor>
  );
};
