// Write your code here
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'
const CryptocurrencyTracker = () => {
  return (
    <div className="cryptoContainer">
      <h1>Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <CryptocurrenciesList />
    </div>
  )
}

export default CryptocurrencyTracker
