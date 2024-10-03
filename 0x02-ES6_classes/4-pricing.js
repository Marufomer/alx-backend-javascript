import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // get amount
  get amount() {
    return this._amount;
  }

  // set amount
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be in number');
    }
    this._amount = value;
  }

  // get currency
  get currency() {
    return this._currency;
  }

  // set currency
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be number');
    }
    return amount * conversionRate;
  }
}
