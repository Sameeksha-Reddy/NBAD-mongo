const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/pb';

mongoDBClient.connect(url, {useUnifiedTopology: true }, (operationError, dbHandler)=> {
    if (operationError){
        console.log("An error has occurred during the connection process");
    } else{
        console.log("Connected to the database")
        // Insert Operation 
        // let data = [
        //     {title: "Eat Out", budget: 30, color: "#ff1a1a"},
        //     {title: "Rent", budget: 525, color: "#00cc44"},
        //     {title: "Grocery", budget: 110, color: "#4d79ff"},
        //     {title: "Electricity", budget: 50, color: "#e6e600"},
        //     {title: "Water Bill", budget: 20, color: "#8c1aff"},
        //     {title: "Wifi", budget: 40, color: "#339933"},
        //     {title: "Travel", budget: 30, color: "#ac7339"},
        //     {title: "Entertainment", budget: 50, color: "#009999"},
        //     {title: "Phone", budget: 40, color: "#cc6699"},
        //     {title: "Trip", budget: 100, color: "#ff8533"},
        // ];
        // dbHandler.db('personal-budget').collection('pb_data').insertMany(data, (operr, opresult)=> {
        //     if (operr){
        //         console.log('Unable to insert data into your collection')
        //     }
        //     else{
        //         console.log("Inserted data Successfully")
        //         dbHandler.close();
        //     }
        // })
    }
});