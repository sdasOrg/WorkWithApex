import { LightningElement,wire } from 'lwc';
import getAcc from '@salesforce/apex/AccLwcCtrl.accList';

export default class CallApexAsMethod extends LightningElement {
     accounts;
    error;
    @wire(getAcc)
    wiredAccounts({error,data}){
        if(data){
            this.accounts = data;
            this.error = undefined;
        }
        else if(error){
            this.error = error;
            this.accounts = undefined;
        }
    }
}