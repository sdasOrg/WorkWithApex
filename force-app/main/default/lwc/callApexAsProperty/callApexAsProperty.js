import { LightningElement,wire } from 'lwc';
import accList from '@salesforce/apex/AccLwcCtrl.accList'

export default class CallApexAsProperty extends LightningElement {
    @wire(accList) accounts;
}