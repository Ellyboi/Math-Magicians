export default function Calculator() {
  return (
    <>
      <div className="calculator">
        <p className="outputResult">0</p>
        <div className="buttonContainer">
          <button type="button" className="calcButtons">AC</button>
          <button type="button" className="calcButtons">+/-</button>
          <button type="button" className="calcButtons">%</button>
          <button type="button" className="calcButtons simpleMath">/</button>
          <button type="button" className="calcButtons">7</button>
          <button type="button" className="calcButtons">8</button>
          <button type="button" className="calcButtons">9</button>
          <button type="button" className="calcButtons simpleMath">*</button>
          <button type="button" className="calcButtons">4</button>
          <button type="button" className="calcButtons">5</button>
          <button type="button" className="calcButtons">6</button>
          <button type="button" className="calcButtons simpleMath">-</button>
          <button type="button" className="calcButtons">1</button>
          <button type="button" className="calcButtons">2</button>
          <button type="button" className="calcButtons">3</button>
          <button type="button" className="calcButtons simpleMath">+</button>
        </div>
        <div className="ceroBotBTNContainer">
          <button type="button" className="calcButtons">0</button>
          <button type="button" className="calcButtons">.</button>
          <button type="button" className="calcButtons simpleMath">=</button>
        </div>
      </div>
    </>
  );
}
