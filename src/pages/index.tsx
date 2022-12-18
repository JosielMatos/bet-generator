import Head from "next/head";
import React, { MouseEvent, useState } from "react";
import { BetsList } from "../components/BetsList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [betsResults, setBetsResults] = useState([] as number[][]);
  const [numbersQty, setNumbersQty] = useState<number>(4);
  const [betsQty, setBetsQty] = useState<number>(1);

  function handleNumbersQty(event: React.ChangeEvent<HTMLSelectElement>) {
    setNumbersQty(+event.target.value);
  }

  function handleBetsQty(event: React.ChangeEvent<HTMLInputElement>) {
    setBetsQty(+event.target.value);
  }

  function generateBets(
    event: MouseEvent,
    betsQty: number = 10,
    numbersQty: number = 6
  ) {
    event.preventDefault();
    if (betsQty <= 0) {
      alert("Insira uma quantidade de apostas válida!");
      return;
    }

    let results = [];

    function bet(): number[] {
      let numbers = new Set<number>();
      while (numbers.size < numbersQty) {
        numbers.add(Math.ceil(Math.random() * 60));
      }

      return Array.from(numbers.values()).sort((a, b) => a - b);
    }

    for (let i = 0; i < betsQty; i++) {
      results.push(bet());
    }

    setBetsResults(results);
  }

  function clearBets() {
    setBetsResults([]);
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

        <div className={styles["form-options"]}>
          <div>
            <label htmlFor='numbers-qty'>
              Quantidade de números:{" "}
            </label>
            <select
              name='numbers-qty'
              id='numbers-qty'
              onChange={handleNumbersQty}
            >
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
            </select>
          </div>

          <div>
            <label htmlFor='bets-qty'>Quantidade de apostas: </label>
            <input
              type='number'
              min={1}
              name='bets-qty'
              id='bets-qty'
              value={betsQty}
              onChange={handleBetsQty}
            />
          </div>
        </div>

        <section className='buttons'>
          <button
            className={styles.button}
            onClick={(event) => generateBets(event, betsQty, numbersQty)}
          >
            Gerar apostas
          </button>

          <button className={styles.button} onClick={clearBets}>
            Limpar apostas
          </button>
        </section>

        {betsResults.length ? (
          <BetsList bets={betsResults} />
        ) : (
          <p>Sem apostas ainda.</p>
        )}
      </main>
    </>
  );
}
