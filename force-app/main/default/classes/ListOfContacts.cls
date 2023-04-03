public with sharing class ListOfContacts {

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        List<Contact> contactList = [SELECT FirstName, Email, Id, LastName FROM Contact];
        return contactList;
    }

}