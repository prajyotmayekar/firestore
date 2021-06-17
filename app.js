const cafeList = document.querySelector('#cafe-list')

function render_element(doc){
    console.log(doc.data().name+" => "+doc.data().city);
}

db.collection('cafes').get().then((snapshot)=>{
    console.log('--db loaded--');
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc=>{
        render_element(doc)
    })
})