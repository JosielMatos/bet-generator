import Head from "next/head";
import { MouseEvent, useState } from "react";
import { BetsList } from "../components/BetsList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [betsResults, setBetsResults] = useState([] as number[][]);

  function generateBets(
    event: MouseEvent,
    betsQty: number = 10,
    numbersQty: number = 6
  ) {
    event.preventDefault();

    let results = [];

    function bet(): number[] {
      let numbers = new Set<number>();
      while (numbers.size < numbersQty) {
        numbers.add(Math.ceil(Math.random() * 60));
      }

      return Array.from(numbers.values()).sort((a,b) => a-b);
    }

    for (let i = 0; i < betsQty; i++) {
      results.push(bet());
    }

    setBetsResults(results);
  }

  return (
    <>
      <Head>
        <title>Gerador de Apostas</title>
        <meta name='description' content='Make your bets easily' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gerador de apostas</h1>

        <button onClick={generateBets}>Gerar apostas</button>

        {betsResults.length ? (
          <BetsList bets={betsResults} />
        ) : (
          <p>Sem apostas ainda.</p>
        )}
      </main>
    </>
  );
}
