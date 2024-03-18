class Customer {
    name= "";
    address = "";
    phone = "";
    email = "";
    accounts =[];
    constructor(name,address,phone,email){
        this.name = name;
        this.address =  address;
        this.phone = phone;
        this.email= email;
    }
    verify(name,phone,email){
        return this.name === name && this.phone === phone && this.email === email ;

    }
    getAccount(){
        return this.accounts
    }
    creatrAccount(bank,accountType){
        return bank.createAccount(accountType);
    }
}
class Account {
    accountNumber = "";
    balance = 0;
    transactions = [];
    bank = null;
    constructor(accountNumber,balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    whitdraww(amount){

    }
    createTransaction(){

    }
    getTransaction(){

    }
    getBalance(){
        return this.balance
    }
    getAccountType(){

    }
    getCustomer(){

    }
    setCustomer(){

    }
}

class CurrentAccount extends Account {
    overdraftLimit = 0;
    overdraftInterest = 0;
    transactions = [];
    constructor(overdraftLimit,overdraftInterest){
        this.overdraftLimit = overdraftLimit;
        this.overdraftInterest = overdraftInterest;
    }
    calculateInterest(){

    }
    getOverdraftLimit(){

    }
    setOverDraftLimit(){

    }
}

class SavingsAccount extends Account {
    interestRate = 0;
    constructor(interestRate){
        this.interestRate = interestRate;
    }
    calculateInterest(){

    }
    getInterestRate(){

    }
    setInterestRate(){

    }
}

class Bank{
    name = "";
    address = "";
    code = "";
    atms = []
    constructor(name,address,code){
        this.name = name;
        this.address = address;
        this.code = code;
    }
    manage(){

    }
    maintain(){

    }
    verify(){

    }
    openAccount(){

    }
    closeAccount(){

    }
    createTransaction(){

    }
    createCustomer(name,address,phone,email){
        const customer = Customer("Vick","Ban Vick","0123456998","Vick@email");
        return customer
    }
    createATM(location,managedBy){
        const atm = new ATM("Ban Bank","BankSE");
        return atm
    }
    createAccount(accountType){
        let account
        if(accountType == "CurrentAccount"){
            account = new CurrentAccount("CAES65",10000,500,0.2);
            return account;
        }else{ 
            account = new SavingsAccount("CAES65",10000,0.3);
            return account;
        }
    }
}

class ATM {
    location = "";
    managedBy = "";
    constructor(location,managedBy){
        this.location = location;
        this.managedBy = managedBy;
    }
    identify(){

    }
    checkBalance(){

    }
    withdraw(){

    }
    deposit(){

    }
    chengePin(){

    }
    transfer(){

    }
    verify(){

    }
}

class Transaction{
    transactionId = "";
    transactionType = "";
    amount = 0;
    transactionDate = "";
    status = "";
    constructor(transactionId,transactionType,amount,transactionDate,status){
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionDate = transactionDate;
        this.status = status;
    }
    getTransactionId(){
        
    }
    getTransactionType(){

    }
    getAmount(){

    }
    getTransactionDate(){

    }
    getStatus(){

    }
    setStatus(){

    }
    setTranactionType(){

    }
    setAmount(){

    }
    setTranactionDate(){

    }
}

const main = () =>{

    const customer1 = new Customer("bank","ban bank","0123456789","Bank@email")
    const account1 = new Account("AC01",500);

    account1.deposit(500);

    console.log(customer1.verify("bank","0123456789","Bank@email"));
    console.log(account1.whitdraww(1000));

}

main();