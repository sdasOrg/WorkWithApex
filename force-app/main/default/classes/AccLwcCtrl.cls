public with sharing class AccLwcCtrl {
    @AuraEnabled(cacheable =true)
    public static List<Account> accList(){
        return [SELECT Id, Name, Phone, Industry From Account LIMIT 5];
    }
   
}