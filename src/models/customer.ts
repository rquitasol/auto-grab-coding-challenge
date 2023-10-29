export class Customer {
  name: string;
  balance: number;

  constructor(name: string, initialDeposit: number) {
    this.name = name;
    this.balance = initialDeposit;
  }

  toString(): string {
    return JSON.stringify(this);
  }
}
