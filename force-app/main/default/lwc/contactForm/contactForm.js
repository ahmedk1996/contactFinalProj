import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LAST_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';
import {updateRecord} from 'lightning/uiRecordApi';
import getContacts from '@salesforce/apex/ListOfContacts.getContacts';

const fields_uploaded = [CONTACT_FIRST_NAME, CONTACT_LAST_NAME, CONTACT_EMAIL];

export default class contactForm extends LightningElement {

    objectApiName = CONTACT_OBJECT;
    fields= fields_uploaded;
    displayContacts = false;

    handleContactCreation(event){
        const toastEvent = new ShowToastEvent({
            title:'Contact Created Successfully' + event.detail.id,
            detail:'Record ID is: ' + event.detail.id,
            variant:'success'
        })
        this.dispatchEvent(toastEvent);
    }

    handleDisplayContacts(){
        if(this.displayContacts){
            this.displayContacts = false;
            updateRecord(this.fields)
                .then(() => {return refreshApex(getContacts)})

        }else{
            this.displayContacts = true;
        }
    }

    // handleDisplay(){
    //    const customEvent = new CustomEvent('display',{
    //         detail: true
    //     });
    //     this.dispatchEvent(customEvent);
    // }

}