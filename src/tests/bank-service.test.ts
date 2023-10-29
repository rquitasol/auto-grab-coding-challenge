import { Bank } from "../models/bank";
import { BankService } from "../services/bank-service";

describe("Bank", () => {
  let bank: Bank;

  beforeEach(() => {
    bank = new Bank();
  });

  //Positive Scenarios (Allowed Behaviors)

  it("allows adding customers and calculating total balance", () => {
    BankService.addCustomer(bank, "John Doe", 1000);
    BankService.addCustomer(bank, "Jane Doe", 1500);

    expect(bank.customers.length).toBe(2);
    expect(BankService.getTotalBalance(bank)).toBe(2500);
  });

  //Negative Scenarios (Disallowed Behaviors)

  it("should not allow adding customers with invalid amount", () => {
    expect(() => BankService.addCustomer(bank, "John Doe", -1000)).toThrow(
      "Invalid initial deposit"
    );
    expect(bank.customers.length).toBe(0);
  });
});
