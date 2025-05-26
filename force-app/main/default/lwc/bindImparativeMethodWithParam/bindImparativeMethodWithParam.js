import { LightningElement } from 'lwc';
import findAcc from '@salesforce/apex/AccLwcCtrl.findAccList';

export default class BindImparativeMethodWithParam extends LightningElement {
    searchKey = '';
    accounts;
    error;
    handleChange(event){
        this.searchKey = event.target.value;
    }

    handleClick(){
        findAcc({keyWord : this.searchKey})
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