import { LightningElement } from 'lwc';
import getAcc from '@salesforce/apex/AccLwcCtrl.accList';

export default class CallApexAsImparativeMethod extends LightningElement {
    accounts;
    error;
    handleClick(){
        getAcc()
        .then((result) => {
            this.accounts = result;
            this.error = undefined;
        })
        .catch((error) => {
            this.error = error;
            this.accounts = undefined;
        })
    }
}