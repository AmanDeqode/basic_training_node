// let arr1 = ["abc","pqr","xyz"];

// let object = {
//     name:"Aman",
//     city:"Indore",
//     getIntro: function(){
//         console.log(`I am ${this.name} lives in ${this.city}`);
//     }
// }

let data = {
    entry:"Have sheet 1 entry",
    cell_size: 64,

    statement: function(){
        console.log(`${this.entry} having ${this.cell_size} cells`);
    }
}

let printEntry = function(column=30,margin='2px',padding='auto'){
    console.log(`${this.entry} having ${this.cell_size} cells containing ${column} and ${margin} ${padding}`);
}

let newData = {
    entry:"Have 2 entry sheet",
    cell_size:128
}

//data.statement();

//data.statement.call(newData);

// In call we just directly call the method
printEntry.call(data,32,'1px');

printEntry.call(newData,124);

// In the apply method we just send the extra arguments in array format
printEntry.apply(data,[32,'1px',2]);

printEntry.apply(newData,[124,'4px']);

// In the bind method it will return the the function and we have to invoked that when ever we required

const fetchDataEntry = printEntry.bind(data,34);

//console.log(fetchDataEntry);

fetchDataEntry();

const fetchDataEntry1 = printEntry.bind(newData,124,'5px');

fetchDataEntry1();