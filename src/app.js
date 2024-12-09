
    const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "Data24"

    mongoClient.connect(connectionUrl , (error,res1) =>{
        if(error){
            return  console.log('error has occured')
        }
        console.log('All Perf')

        const db = res1.db(dbname)

        //////////////////////////////////////////////////////////////


        // insertOne 1

         db.collection('users').insertOne({
             name : 'mona',
             age : 22
         },(error , data) => {
             if(error){
                 console.log('Unable to insert Data')
             }
              console.log(data.insertedId)
         })
         // insertOne 2

         db.collection('users').insertOne({
            name : 'ahmed',
            age : 23
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
             console.log(data.insertedId)
        })

        //////////////////////////////////////////////////////////////
        db.collection ('users').insertMany(
           [ {
                name: 'amer',
                age: 27
            },
            {
                name: 'donya',
                age: 27
            },
            {
                name: 'reem',
                age: 27
            },
            {
                name: 'somaia',
                age: 27
            },
            {
                name: 'joodi',
                age: 27
            },
            {
                name: 'shahad',
                age: 22
            },
            {
                name: 'nura',
                age: 33
            },
            {
                name: 'esraa',
                age: 31
            },
            {
                name: 'sara',
                age: 20
            },
            {
                name: 'fuza',
                age: 39
            }] , (error,data)=>{
                if(error){
                    console.log('Unable to insert data')
                }
                   
            } 
        )
      /////////////////////////////////////////////////////////////////////

           // match filter
      
       db.collection('users').find({age:27}).toArray((error , users)=>{
         if (error) {
             return console.log('error has occured')
         }
         console.log(users)
       })


      //  limit number 
       db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
         if (error) {
             return console.log('error has occured')
         }
         console.log(users)
       })
      /////////////////////////////////////////////////////
      // set/inc

      db.collection("users").updateOne({_id:mongodb.ObjectId("675648fffb236b22346786c0")},{
        $set: { name: 'Ali' }, $inc: { age: 4 }
      }).
      then((data1)=>{console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})

      db.collection("users").updateOne({_id:mongodb.ObjectId("6756405672dd4f1d5f9cf7b1")},{
        $set: { name: 'lora' }, $inc: { age: 4 }
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})


     db.collection("users").updateOne({_id:mongodb.ObjectId("6756405672dd4f1d5f9cf7b2")},{
        $set: { name: 'jana' }, $inc: { age: 4 }
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})


     db.collection("users").updateOne({_id:mongodb.ObjectId("6756405672dd4f1d5f9cf7b3")},{
        $set: { name: 'kady' }, $inc: { age: 4 }
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})


    /////////////////////////////////////////////////////////////////////

     db.collection('users').updateMany({},{
         $inc: {age: 10}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

    ////////////////////////////////////////////////////////////////////

     db.collection('users').deleteMany({age:41})
     .then((data1)=>{console.log(data1.deletedCount)})
     .catch((error)=> {console.log(error)})

})

     


