abstract class CreditBase {
    constructor(){

    }
    save():void{
        console.log("Saved !!!");
    }
    abstract calculate():void;
}

class ConsumerCredit extends CreditBase {
    calculate():void{
        console.log("calculated for ConsumerCredit")
    }
    constructor() {
        super();
    }
}

class MortgageCredit extends CreditBase {
    calculate():void{
        console.log("calculated for MortgageCredit")
    }
    constructor() {
        super();
    }
}

let consumerCredit = new ConsumerCredit();
consumerCredit.save();
consumerCredit.calculate();

let mortgageCredit = new MortgageCredit();
mortgageCredit.save();
mortgageCredit.calculate();

let credit : CreditBase
credit = new ConsumerCredit();
credit = new MortgageCredit();