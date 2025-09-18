import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Header extends LightningElement {
    title = 'BookARide';
    logoURL = IMAGES + '/logo.png';
}