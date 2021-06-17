db.collection('cafes').get().then((snapshot)=>{
    console.log('--db loaded--');
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc=>{
        console.log(doc.data());
    })
})