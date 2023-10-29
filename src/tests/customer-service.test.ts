import { Bank } from "../models/bank";
import { Customer } from "../models/customer";
import { BankService } from "../services/bank-service";
import { CustomerService } from "../services/customer-service";

describe("Customer", () => {
  let bank: Bank;
  let customer1: Customer;
  let customer2: Customer;

  beforeEach(() => {
    bank = new Bank();

    BankService.addCustomer(bank, "John Doe", 1000);
    BankService.addCustomer(bank, "Jane Doe", 1500);

    customer1 = bank.customers[0];
    customer2 = bank.customers[1];
  });

  //Positive Scenarios (Allowed Behaviors)

  it("should be allowed to check their balance", () => {
    expect(CustomerService.checkBalance(customer1)).toBe(1000);
  });

  it("should be allowed to deposit funds", () => {
    CustomerService.deposit(customer1, 1000);
    expect(CustomerService.checkBalance(customer1)).toBe(2000);
  });

  it("should be allowed to withdraw funds", () => {
    CustomerService.withdraw(customer1, 500);
    expect(CustomerService.checkBalance(customer1)).toBe(500);
  });

  it("should be allowed to transfer funds to another customer", () => {
    CustomerService.transfer(customer1, customer2, 500);
    expect(CustomerService.checkBalance(customer1)).toBe(500);
    expect(CustomerService.checkBalance(customer2)).toBe(2000);
  });

  //Negative Scenarios (Disallowed Behaviors)

  it("should not be allowed to withdraw more money than their current balance", () => {
    expect(() => CustomerService.withdraw(customer1, 2000)).toThrow(
      "Insufficient balance"
    );
    expect(CustomerService.checkBalance(customer1)).toBe(1000);
  });

  it("should not be allowed to transfer more money than their current balance", () => {
    expect(() => CustomerService.transfer(customer1, customer2, 2000)).toThrow(
      "Insufficient balance"
    );
    expect(CustomerService.checkBalance(customer1)).toBe(1000);
    expect(CustomerService.checkBalance(customer2)).toBe(1500);
  });

  it("should not be allowed to perform actions with invalid amounts", () => {
    expect(() => CustomerService.withdraw(customer1, -1)).toThrow(
      "Invalid amount"
    );
    expect(() => CustomerService.deposit(customer1, -1)).toThrow(
      "Invalid amount"
    );
    expect(() => CustomerService.transfer(customer1, customer2, -1)).toThrow(
      "Invalid amount"
    );

    expect(CustomerService.checkBalance(customer1)).toBe(1000);
    expect(CustomerService.checkBalance(customer2)).toBe(1500);
  });
});
