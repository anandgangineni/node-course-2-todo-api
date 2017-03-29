const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return   console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').insertOne({
    //   text: 'something todo'
    // }, (err, result) => {
    //   if(err){
    //       return console.log('unable to connect to mongodb server');
    //   }
    //
    //   console.log( JSON.stringify(result.ops, undefined, 2));
    //
    // });

    db.collection('Users').insertOne(
      {
        name: 'anand gangineni',
        age: 45,
        location: '11901 harpster bnd, austin, tx, 78717'
      },
      (err, result)=>{
        if(err){
          return console.log('unable to connect to mongodb server');
        }
        console.log( JSON.stringify(result.ops, undefined, 2));
      }
    );

    db.close();
});
