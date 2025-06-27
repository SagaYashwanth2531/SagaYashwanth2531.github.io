/*Json
JSON is mainly used to store and exchange data in a format that is both human-readable and machine-readable. */


const student = `{
    "name": "ammy",
    "age": 21
}`;  // basically sever se api fetch kiye toh aisa string format mai aata hai

const yash = JSON.parse(student);  //so we are parsing that
console.log(yash.name);
console.log(JSON.stringify(yash));//again we are sending to server server only accepts stringify i mean string format


