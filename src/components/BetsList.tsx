import { Bet } from "./Bet";
import styles from "../styles/BetsList.module.css";

interface BetsListProps {
  bets: number[][];
}

export function BetsList({ bets }: BetsListProps) {
  return (
    <ul className={styles.container}>
      {bets.map((e, i) => {
        return <Bet key={i} numbers={e} betId={i + 1} />;
      })}
    </ul>
  );
}
