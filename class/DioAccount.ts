export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean;

  constructor(name: string, accountNumber: number, status: boolean){
    this.name = name;
    this.accountNumber = accountNumber;
    this.status = status;
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (value : number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log('You deposited');
    }else {
      console.log("Whops, something went wrong because yours account is inactive: ");
    }
  }

  withdraw = (value : number): void => {

    if(this.validateStatus() && value <= this.balance){
      this.balance -= value;
      console.log('You withdrew your money');
    } else {
      console.log("Innactive account or not enough money");
    }

  }

  getBalance = (): void => {
    console.log(this.balance);
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Whops, something went wrong because yours account is inactive: ');
  }
}