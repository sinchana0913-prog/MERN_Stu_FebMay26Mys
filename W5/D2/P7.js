//callback handlig with named functions
function loadUser(next){
    setTimeout(function(){
        console.log("Step1: User loaded.");
        next();
    },400);

}
function loadOrders(next){
    setTimeout(function(){
        console.log("Step2: orders loaded.");
        next();
    },400);
}
function loadPayments(next){
    setTimeout(function(){
        console.log("Step3: payments loaded.");
        next();
    },400);
}
function loadShipment(){
    setTimeout(function(){
        console.log("Step4: Shipment loaded.");
        console.log("Same flow but easier to read.");
        //next();
    },400);
}
loadUser(function(){
    loadOrders(function(){
        loadPayments(function(){
            loadShipment(function(){

            });
        });
    });
});