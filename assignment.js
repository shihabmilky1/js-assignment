 //https://github.com/shihabmilky1/js-assignment


 function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;        
           return meter;
    }
    var result =  kilometerToMeter(0);
    if(result < 0){
        console.log("Please Input Positive value");
    }
    else{
           console.log(result);}
//=============================================================
//=============================================================

   function budgetCalculator(watch, phone , laptop){
           var watchPrice = 50;
           var totalWatchCost = watch * watchPrice
    
           var phonePrice = 100;
           var totalPhoneCost = phone * phonePrice; 

           var laptopPrice = 500;
           var totalLaptopPrice = laptop * laptopPrice;

           totalBuyingCost = totalWatchCost + totalPhoneCost + totalLaptopPrice;
            return totalBuyingCost;
        }   
        var yourCost = budgetCalculator(3,5,10);
        console.log(yourCost);    
//==============================================================================       
//==============================================================================
function hotelCost(days){
    totalDays = 0;
    if(days <=10){
        totalDays = days * 100;
       
    }
    else if(days <= 20){
        var tenDays = 10 * 100;
        var remainingDays = days -10;
        var twentydays = remainingDays * 80;
        totalDays = tenDays + twentydays;
        
    }
    else{
            var tenDays = 10 * 100;
            var twentydays = 10 * 80;
            var remainingDays = days - 20;
            var afterTwentyDays = remainingDays * 50;
            totalDays = tenDays + twentydays + afterTwentyDays;
            
    }
    return totalDays;
}
var allDaysCost = hotelCost(16);
console.log(allDaysCost);
//=======================================================
//=======================================================

function megaFriend(names) {    
    var longName = "";
    for(var i = 0; i< names.length; i++){
        var element = names[i];
        if (element.length > longName.length){
            longName = element;
        }
    }
    return longName
}
    var longWordResult = megaFriend(['pomi', 'shihab', 'pranto','ishaque' ,'sojib' ]);
    console.log(longWordResult);
