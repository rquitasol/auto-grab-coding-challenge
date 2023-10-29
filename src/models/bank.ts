import { Customer } from "./customer";

export class Bank {
  customers: Customer[] = [];

  toString(): string {
    let customersInfo = this.customers.map((customer, idx) => {
      return `Customer ${idx + 1}: Name - ${customer.name}, Balance - ${
        customer.balance
      }`;
    });

    return `Bank: \n${customersInfo.join("\n")}`;
  }
}
