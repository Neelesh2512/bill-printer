const dbConnect = require('./connection');

const main = async () => {
  const collection = await dbConnect();
  const result = await collection.find({"sale1.amount":500}).toArray();
  // const addColumn  = await collection.updateMany({partyName: "Party A"}, {$set: {"sale2": [
  //   {billnumber: 1, amount: 1000, date: "2019-01-01"},
  //   {billnumber: 2, amount: 2000, date: "2019-02-01"},
  // ]}});

  //const updateColumn = await collection.updateMany({}, {$rename: {"sale1.billnumber": "sale1.billNumber"}});
  console.warn(JSON.stringify(result,null," "));
}

main();