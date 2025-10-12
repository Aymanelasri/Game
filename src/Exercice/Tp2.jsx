import { useState } from 'react';

export default function Tp2() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [win, setWin] = useState(false);
  const maxAttempts = 4; // الحد الأقصى للمحاولات

  const handleChange = (e) => {
    e.preventDefault();

    if (attempts >= maxAttempts) {
      setResult("Vous avez dépassé le nombre maximum de tentatives. Vous avez perdu !");
      return;
    }

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const guessedNumber = Number(number);

    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
      setResult('Veuillez entrer un nombre valide entre 1 et 10.');
      return;
    }

    setAttempts(attempts + 1);

    if (guessedNumber === randomNumber) {
      setResult(' Bravo! Vous avez deviné le nombre mystère.');
      setWin(true);
    } else if (guessedNumber < randomNumber) {
      setResult(`Le nombre mystère est plus grand que ${guessedNumber}.`);
    } else {
      setResult(`Le nombre mystère est plus petit que ${guessedNumber}.`);
    }

    if (attempts + 1 === maxAttempts && !win) {
      setResult("Vous avez perdu ! Le nombre mystère était " + randomNumber);
    }
  };

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const rejouer = () => {
    setNumber('');
    setResult('');
    setAttempts(0);
    setWin(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Jeu du Nombre Mystère</h1>
      <p>Devinez un nombre entre 1 et 10</p>
      <input
        type="text"
        value={number}
        onChange={onChange}
        placeholder="Entrez un nombre"
      />
      <button onClick={handleChange} >
        Vérifier
      </button>

      <h4>Nombre d'essais : {attempts} / {maxAttempts}</h4>
      <p>{result}</p>

        {(win || attempts === maxAttempts) && (
        <button onClick={rejouer} style={{ marginLeft: '10px' }}>
            Rejouer
        </button>
)}
    </div>
  );
}