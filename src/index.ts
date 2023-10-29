import { Bank } from "./models/bank";
import { BankService } from "./services/bank-service";
import { CustomerService } from "./services/customer-service";

const bank = new Bank();

BankService.addCustomer(bank, "John Doe", 1000);
BankService.addCustomer(bank, "Jane Doe", 1500);
console.log(bank);

const customer1 = bank.customers[0];
const customer2 = bank.customers[1];

CustomerService.deposit(customer1, 1000);
console.log(`${customer1.name} - ${CustomerService.checkBalance(customer1)}`);

CustomerService.withdraw(customer2, 500);
console.log(`${customer2.name} - ${CustomerService.checkBalance(customer2)}`);

const transferAmount = 500;
CustomerService.transfer(customer1, customer2, transferAmount);
console.log(
  `${customer1.name} is transfering ${transferAmount} to ${customer2.name}. `
);
console.log(`${customer1.name} - ${CustomerService.checkBalance(customer1)}`);
console.log(`${customer2.name} - ${CustomerService.checkBalance(customer2)}`);

const totalBalance = BankService.getTotalBalance(bank);
console.log(`Bank total balance: ${totalBalance}`);
