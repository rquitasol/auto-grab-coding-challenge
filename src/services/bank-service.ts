import { Bank } from "../models/bank";
import { Customer } from "../models/customer";

export class BankService {
  static addCustomer(bank: Bank, name: string, initialDeposit: number): void {
    if (initialDeposit <= 0) {
      throw new Error("Invalid initial deposit");
    }

    const customer = new Customer(name, initialDeposit);
    bank.customers.push(customer);
  }

  static getTotalBalance(bank: Bank): number {
    return bank.customers.reduce(
      (total, customer) => total + customer.balance,
      0
    );
  }
}
