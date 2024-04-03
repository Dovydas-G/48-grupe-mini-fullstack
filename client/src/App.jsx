import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [answer, setAnswer] = useState('...');

  function handleFirstNumberChange(e) {
    setFirstNumber(e.target.value);
  }

  function handleSecondNumberChange(e) {
    setSecondNumber(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:4820/api/calc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        pirmas: firstNumber,
        antras: secondNumber,
      }),
    })
      .then(res => res.json())
      .then(data => setAnswer(data.result))
      .catch(e => console.error(e));
  }

  return (
    <>
      <header className="container">HEADER</header>
      <main className="container">
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={firstNumber} onChange={handleFirstNumberChange} placeholder="Pirmas skaicius" />
          <span>+</span>
          <input type="text" value={secondNumber} onChange={handleSecondNumberChange} placeholder="Antras skaicius" />
          <span>=</span>
          <button>Calc</button>
        </form>
        <div className="result">Result: {answer}</div>
      </main>
      <footer className="container">FOOTER</footer>
    </>
  );
}

export default App;
