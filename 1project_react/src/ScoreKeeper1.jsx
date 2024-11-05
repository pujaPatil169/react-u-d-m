import { v4 as uuid } from "uuid";
import { useState } from "react";
export default function ScoreKeeper({ numPlayers, target }) {
  const players = new Array(numPlayers).fill(0);
  const iswinArry = new Array(numPlayers).fill(false);
  const [score, setScore] = useState(players);
  const [isWinner, setIsWinner] = useState(iswinArry);

  // const incrementScore = (i) => {
  //   const newVal = score[i] + 1;
  //   return setScore((oldScore) => [...oldScore].splice(i, 0, newVal));
  // };----wrong way of incrementing

  // const handleWin = (newScore, i) => {
  //   if (newScore[i] === target) {
  //     return setIsWinner((oldWinner) => {
  //       const newWinner = [...oldWinner];
  //       newWinner[i] = true;
  //       return newWinner;
  //     });
  //   } else {
  //     return setIsWinner((oldArrayScore) => {
  //       const newArrayScore = [...oldArrayScore];
  //       newArrayScore[i] = false;
  //       return newArrayScore;
  //     });
  //   }
  // };

  // const incrementScore = (i) => {
  //   setScore((oldScore) => {
  //     const newScore = [...oldScore];
  //     newScore[i] += 1;
  //     handleWin(newScore, i);
  //     return newScore;
  //   });
  // };

  //more reacty way of incrementing score is given below

  const incrementScore = (idx) => {
    setScore((oldScore) => {
      return oldScore.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });
    });
  };

  return (
    <div>
      {score.map((s, i) => (
        <p key={uuid()}>
          player {i + 1} : {s}
          <button onClick={() => incrementScore(i)}>+1</button>
          {score >= target && "winner"}
        </p>
      ))}
    </div>
  );
  // return (
  //   <div>
  //     {score.map((i) => (
  //       <p key={uuid()}>
  //         player {score[i] + 1} : {i}
  //         <button onClick={() => incrementScore(i)}>+1</button>
  //       </p>
  //     ))}
  //   </div>
  // );
}
