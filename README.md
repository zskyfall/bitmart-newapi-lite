## Usage

```javascript
const { BitmartRestApi } = require('bitmart-newapi-lite');

(async () => {
  const client = new BitmartRestApi('my-api-name', 'my-api-key', 'my-api-secret');

  try {
    // Public api, works without api name, api key and api secret
    await client.ping();
    const time = await client.getTime();
    const serviceStatus = await client.getServiceStatus();
    const currencies = await client.getCurrencies();
    const symbols = await client.getSymbols();
    const symbolsDetails = await client.getSymbolDetails();
    const ticker = await client.getTicker();
    const tickerOfPair = await client.getTicker(symbol = 'BTC_USDT');
    const klineSteps = await client.getKlineSteps(symbol = 'BTC_USDT');
    const kline = await client.getKline(symbol = 'BTC_USDT', from ='1551989741215',to = '1552075987650', step = 15);
    const depth = await client.getDepth(symbol = 'BTC_USDT',precision = 6);
    const tradeHistory = await client.getTrades(symbol = 'BTC_USDT');

    /// Private api, requires api name, api key and api secret

    //FREE VERSION (Bitmart-newAPI-Lite)
    const balance = await client.getBalance();
    const orders = await client.getUserOrders(symbol = 'BTC_USDT',offset = 1,limit = 100, status = 1);
    const personalTradeHistory = await client.getUserTrades(symbol = 'BTC_USDT',offset = 1,limit = 10);
    
    ///PRO VERSION ONLY!!! (Bitmart-newAPI-Full)
    let orderId = await client.createOrder(symbol ='BTC_USDT',amount = 1, price = 10000,side = 'sell');
    await client.cancelOrder(symbol = 'ETH_USDT', order_id = orderId.data.order_id);
    await client.cancelAllOrders(symbol = 'BTC_USDT',side = 'sell');
    const orderDetail = await client.getOrderDetail(symbol = 'BTC_USDT',order_id = orderId.data.order_id);

  } catch (err) {
    console.error(err);
  }
  
})();
```
## Created by JasonZed: 

### This is the lite version of Bitmart API. To own a fully functional version, please contact us by email:
Jasonzed23@gmail.com

or Donate (minimum value: 5 USD):
- BTC: 1AGCzAbnhypTi5rAc1bGv8T1RYq78rp4vD
- USDT (ERC20): 0x9e19165af739a52d7a11ca84f64e5c5a936a40a9 
- ETH: 0x9e19165af739a52d7a11ca84f64e5c5a936a40a9

then send me an email with your donate transaction hash (the tx ID). Thanks!
