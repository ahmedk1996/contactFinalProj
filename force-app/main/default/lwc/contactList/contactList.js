import { LightningElement, wire } from 'lwc';
import ListOfContacts from '@salesforce/apex/ListOfContacts.getContacts'

// import CONTACT_NAME from '@salesforce/schema/Contact.FirstName';
// import CONTACT_LAST_NAME from '@salesforce/schema/Contact.LastName';
// import { getRecord } from 'lightning/uiRecordApi';
// const fields = [CONTACT_NAME, CONTACT_LAST_NAME];

export default class ContactList extends LightningElement {

    // @api recordId;
    // @wire(getRecord, {recordId: '$recordId', fields: fields})
    // contacts

    @wire(ListOfContacts)
    contactList
    
    
}
