import { Customer } from "../models/customer";

export class CustomerService {
  static deposit(customer: Customer, amount: number) {
    this.isAmountValid(amount);
    customer.balance += amount;
  }

  static withdraw(customer: Customer, amount: number) {
    this.isAmountValid(amount);
    if (customer.balance < amount) {
      throw new Error("Insufficient balance");
    }
    customer.balance -= amount;
  }

  static checkBalance(customer: Customer): number {
    return customer.balance;
  }

  static transfer(sender: Customer, reciever: Customer, amount: number) {
    this.isAmountValid(amount);
    this.withdraw(sender, amount);
    this.deposit(reciever, amount);
  }

  private static isAmountValid(amount: number) {
    if (amount < 0) {
      throw new Error("Invalid amount.");
    }
  }
}
