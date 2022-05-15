import { useEffect, useState } from 'react'

const OrderForm = (props) => {

  const [valid, setValid] = useState(false)

  let priceCola = 0.99
  const [cola, setCola] = useState(0)
  let priceHamburger = 2.99
  const [hamburger, setHamburger] = useState(0)
  let priceEis = 1.59
  const [eis, setEis] = useState(0)

  const [preis, setPreis] = useState(0)

  useEffect(() => {
    if (cola > 0 || hamburger > 0 || eis > 0) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [cola, hamburger, eis]);

  return (
    <div id="OrderForm" className="step">
      <h1>
        Warenkorb
      </h1>
      <div className="range-input-wrapper ">
        <div>
          <label htmlFor="input-size">Cola:</label>
          <input type="range" min="0" max="100"
            value={cola}
            className="slider" id="input-cola-range"
            onChange={(event) => setCola(parseInt(event.target.value))} />
          <input type="number" value={cola} id="input-cola-number" max={100} min={0} step={1} onChange={(event => setCola(parseInt(event.target.value)))} />
        </div>
        <div>
          <label htmlFor="input-size">Hamburger:</label>
          <input type="range" min="0" max="100"
            value={hamburger}
            className="slider" id="input-hamburger-range"
            onChange={(event) => setHamburger(parseInt(event.target.value))} />
          <input type="number" value={hamburger} id="input-hamburger-number" max={100} min={0} step={1} onChange={(event => setHamburger(parseInt(event.target.value)))} />
        </div>
        <div>
          <label htmlFor="input-size">Eis:</label>
          <input type="range" min="0" max="100"
            value={eis}
            className="slider" id="input-eis-range"
            onChange={(event) => setEis(parseInt(event.target.value))} />
          <input type="number" value={eis} id="input-eis-number" max={100} min={0} step={1} onChange={(event => setEis(parseInt(event.target.value)))} />
        </div>

      </div>
      <div className="price">{preis.toFixed(2)} €</div>
      <div className={"btn " + (valid ? "valid" : "invalid")}
        onClick={() => {
          if (valid) {
            props.setCurrentStep(2)
            props.setOrderData({
              cola: cola,
              preis: 0
            })
          }
        }}>Bestellen</div>
    </div>
  )
}

export default OrderForm
