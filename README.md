# AutoGrab Coding Challenge

This project contains the implementation of a Bank Service along with associated tests using Jest.

## Design Choices

The Bank Service comprises functionalities to manage customers, their accounts, and their transactions.
The service includes methods to handle customer operations like depositing, withdrawing, transferring funds, and checking balances.
The code is structured into the following main components:

- BankService: Manages bank-related operations, adding customers, and calculating the total bank balance.
- CustomerService: Handles customer-specific operations like deposits, withdrawals, transfers, and balance checking.

## Technologies Used

- Typescript
- ExpressJs
- Jest

## Getting Started

To run the tests on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/rquitasol/auto-grab-coding-challenge.git
```

2. Install dependencies:

```bash
# Install Express.js
npm install express

# Install TypeScript
npm install typescript @types/node @types/express --save-dev

# Install Jest and ts-jest for testing
npm install jest ts-jest @types/jest --save-dev
```

3. Run Tests:

```bash
 npm test -- --verbose
```
