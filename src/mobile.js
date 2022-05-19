//SmartPhone
class SmartPhone{
    constructor(ram, batteryPower, price){
        this.ram = ram;
        this.batteryPower = batteryPower;
        this.price = price;
    }
    displayFeatures(){
        return this.ram +'\n'+this.batteryPower+'\n'+this.price;
    }
    remainingAmount(priceIHave){
        this.price = priceIHave - this.price;
    } 
}


// AndroidPhone
class AndroidPhone extends SmartPhone{
    constructor(modelName, ram, batteryPower, price) {
        super(ram, batteryPower, price)
        this.modelName = modelName;
    }
    displayFeatures(){
        return this.modelName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
    }
    remainingAmount(priceIHave){
        super.remainingAmount(priceIHave);
        if(this.price<=0){
            return "Customer has no more amount";
        }
        else{
            return 'Customer has remaining Rs.'+this.price +' after buying the android phone';
        }
    } 
}


// IPhone
class IPhone extends SmartPhone{
    constructor(seriesName, ram, batteryPower, price) {
        super(ram, batteryPower, price)
        this.seriesName = seriesName;
    }
    displayFeatures(){
        return this.seriesName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
    }
    remainingAmount(priceIHave){
        super.remainingAmount(priceIHave);
        if(this.price<=0){
            return "Customer has no more amount";
        }
        else{
            return 'Customer has remaining Rs.'+this.price +' after buying the android phone';
        }
    }
}


//MobileCampus
class MobileCampus{
    constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles){
        this.NoOfMobiles = NoOfMobiles;
        this.NoOfAndroidMobiles = NoOfAndroidMobiles;
        this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
    }
    changeMobileAvailabilityNumber(count,type){
        if(type === 'android'){
            this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
            return 'Available android mobiles are '+this.NoOfAndroidMobiles;

        }
        if(type === 'iphone'){
            this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
            return 'Available iphone mobiles are '+this.NoOfIPhoneMobiles;
        }
    }
}
let android_data  = new AndroidPhone("Realme 7","8 GB","5000 mAh",17000);
console.log(android_data.displayFeatures());
console.log(android_data.remainingAmount(20000));

let iphone_data  = new IPhone("iPhone 13","4 GB","3800 mAh",70000);
console.log(iphone_data.displayFeatures());
console.log(iphone_data.remainingAmount(30000));

let data = new MobileCampus(1000,700,200);
console.log(data.changeMobileAvailabilityNumber(600,"android"));
console.log(data.changeMobileAvailabilityNumber(50,"iphone"));