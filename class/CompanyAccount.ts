import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, status: boolean){
    super(name, accountNumber, status)
  }

  getLoan = (value : number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log('You took out a loan')
    } else {
      console.log('Innactive account')
    }
  }
}
