// Write your JS code here

import './index.css'
const CryptocurrencyItem = props => {
  const {currencyCoin} = props
  const {currencyLogo, currencyName, id, euroValue, usdValue} = currencyCoin
  return (
    <li className="coinBox">
      <div className="coin">
        <img src={currencyLogo} alt={currencyName} className="image"/>
        <p>{currencyName}</p>
      </div>
      <div className="box">
        <p className="boxx">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
