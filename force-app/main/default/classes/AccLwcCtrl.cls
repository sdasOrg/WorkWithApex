public with sharing class AccLwcCtrl {
    @AuraEnabled(cacheable =true)
    public static List<Account> accList(){
        return [SELECT Id, Name, Phone, Industry From Account LIMIT 5];
    }

    @AuraEnabled
    public static List<Account> findAccList(String keyWord){
        String key = '%' + keyWord + '%';
        return [select Id, Name from Account where Name Like: key LIMIT 10] ;
    }
   
}