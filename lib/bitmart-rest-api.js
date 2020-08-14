const crypto = require('crypto');
const axios = require('axios');
const qs = require('qs');

class BitmartRestApi {
  constructor(apiName = '', apiAccessKey = '', apiSecretKey = '') {
    this.apiName = apiName;
    this.apiAccessKey = apiAccessKey;
    this.apiSecretKey = apiSecretKey;
    this.baseUrl = 'https://api-cloud.bitmart.com/';
    this.apiVersion1 = 'v1';
    this.apiVersion2 = 'v2';
    this.apiType = 'spot';
    this.apiVer1Url = this.baseUrl + this.apiType + '/' + this.apiVersion1 + '/';
    this.apiVer2Url = this.baseUrl + this.apiType + '/' + this.apiVersion2 + '/';
  }

  getSignedMessage(message, secret) {
    return crypto.createHmac('sha256', secret).update(message).digest('hex');
  }

  //PUBLIC API
  async ping() {
    let rs = await axios({
      method: 'get',
      url: this.baseUrl })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getTime() {
    let rs = await axios({
      method: 'get',
      url: this.baseUrl + 'system/time'})
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getServiceStatus() {
    let rs = await axios({
      method: 'get',
      url: this.baseUrl + 'system/service'})
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getCurrencies() {

    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'currencies' })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getSymbols() {
    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'symbols' })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getSymbolDetails() {
    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'symbols/details' })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getTicker() {
    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'ticker'})
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getTickerOfPair(symbol) {
    let query = "?symbol=" + symbol;
    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'ticker' + query })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getKlineSteps(symbol) {
    let query = "?symbol=" + symbol;
    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'steps' + query })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getKline(symbol, from, to, step) {
    let query = "?symbol=" + symbol + "&from=" + from + "&to=" + to + "&step=" + step;
    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'symbols/kline' + query })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getDepth(symbol, precision) {
    let query = "?symbol=" + symbol + "&precision=" + precision;
    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'symbols/book' + query })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getTrades(symbol) {
    let query = "?symbol=" + symbol;
    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'symbols/trades' + query })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  //PRIVATE API
  async getBalance() {

    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'wallet',
      headers: {'Content-Type': 'application/json', 'X-BM-KEY': this.apiAccessKey} })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getUserOrders(symbol, offset, limit, status) {
    let query = "?symbol=" + symbol + "&status=" + status + "&offset=" + offset + "&limit=" + limit;

    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'orders' + query,
      headers: {'Content-Type': 'application/json', 'X-BM-KEY': this.apiAccessKey} })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

  async getUserTrades(symbol, offset, limit) {
    let query = "?symbol=" + symbol + "&offset=" + offset + "&limit=" + limit;

    let rs = await axios({
      method: 'get',
      url: this.apiVer1Url + 'trades' + query,
      headers: {'Content-Type': 'application/json', 'X-BM-KEY': this.apiAccessKey} })
      .then(function (response) {
          return response.data;
      })
      .catch(function (error) {
          return error;
      });

    return rs;
  }

}

module.exports = BitmartRestApi;