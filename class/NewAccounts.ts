import { DioAccount } from './DioAccount'

export class NewAccounts extends DioAccount {
    
    constructor(name: string, accountNumber: number, status: boolean){
        super(name, accountNumber, status)
    }
     
    deposit: (value: number) => void = (value: number) => {
        if(this.validateStatus()){
            this.balance += value;
            console.log('You deposited');
        }else {
            console.log("Innactive account");
        }
    }    
}