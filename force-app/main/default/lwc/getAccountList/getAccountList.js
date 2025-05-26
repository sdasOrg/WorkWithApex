import { LightningElement,wire } from 'lwc';
import getAccList from '@salesforce/apex/AccLwcCtrl.accList';

export default class GetAccountList extends LightningElement {
    @wire(getAccList) accounts;
}