// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}
  componentDidMount() {
    this.getcurrencyList()
  }
  getcurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }
  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="table">
        <div className="heading">
          <h3>CoinType</h3>
          <div className="box">
            <h3 className="boxx">USD</h3>
            <h3>EURO</h3>
          </div>
        </div>
        <ul type="none">
          {isLoading ? (
            <div data-testid="loader">
  <Loader type="Rings" color="#ffffff" height={80} width={80} />
</div>
          ) : (
            currencyList.map(eachCoin => (
              <CryptocurrencyItem currencyCoin={eachCoin} key={eachCoin.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
