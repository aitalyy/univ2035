
var firestore = firebase.firestore();
var dataFire = firestore.collection('sensor_1').doc('kitchen');
var result;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function add(name){
    var database1 = firebase.database();
    var resRef = database.ref('/');

    return resRef.push('gas');
}

function asd(){
    
    var set = dataFire.set({
        'asd': 440,
        'gas': 17
    });
}


function test5(){//finish
  let citiesRef = firestore.collection('sensor_1');
  let query = citiesRef.get().then(k=>{
    k.forEach(doc => {
      if (doc.data().gas)
        console.log(doc.data().gas);
      // console.log(doc.id, '=>', doc.data());
    });
  })
}

function test6(){
  setInterval(function(){
    let rand = getRandomArbitrary(1,100);
    let set = dataFire.set({
      'gas': rand
    });
    test5();
  }, 1000);
}

function test7(){
  let add = firestore.doc('sensor_1/kitchen');
}

function test4(){
  let citiesRef = firestore.collection('sensor_1');
  let query = citiesRef.where('gas', '==', 15).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
  
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
}

function test1(){
    let cityRef = firestore.doc('sensor_1/kitchen');
    let getDoc = cityRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log(doc.data());
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
}
//--------------------------------------------------------------------------------------------

function test3(){
  let sfRef = firestore.doc('sensor_1/kitchen');
  sfRef.listCollections().then(collections => {
  collections.forEach(collection => {
    console.log('Found subcollection with id:', collection.id);
  });
});
}


function test2(){
  // let cityRef = firestore.doc('sensor_1/kitchen');
  let cityRef = firestore.collection('sensor_1');
  let getDoc = cityRef.where('gas','==','15');
  console.log(getDoc.get());
}