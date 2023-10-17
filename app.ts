import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccounts } from './class/NewAccounts'


// Active accounts

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Pablo', 24, true)
console.log(peopleAccount)
peopleAccount.deposit(100)

const companyAccount: CompanyAccount = new CompanyAccount('Starbucks', 46, true)
companyAccount.deposit(1000)
console.log(companyAccount)

const newAccounts: NewAccounts = new NewAccounts('New Account', 12, true)
newAccounts.deposit(10)
console.log(newAccounts)


// Deposit
peopleAccount.deposit(100)
peopleAccount.getBalance();

companyAccount.deposit(2000.00)
companyAccount.getBalance();

newAccounts.deposit(50)
newAccounts.getBalance();

// Withdraw

peopleAccount.withdraw(90) 
peopleAccount.getBalance();

// Loan
companyAccount.getLoan(500);
companyAccount.getBalance();

// Inactive accounts

const peopleInnactiveAccount: PeopleAccount = new PeopleAccount(1, 'Troli', 11, false)
peopleInnactiveAccount.deposit(200)
console.log(peopleInnactiveAccount)

const companyInnactiveAccount: CompanyAccount = new CompanyAccount('Outback', 60, false)
companyInnactiveAccount.deposit(2000)

try {
    companyInnactiveAccount.withdraw(2000)
} catch (error) {
    console.log("Whops, something went wrong try again later:")
}

try {
    peopleInnactiveAccount.deposit(200)
} catch (error) {
    console.log("Whops, something went wrong try again later:")
}


