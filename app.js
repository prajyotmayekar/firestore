const cafeList = document.querySelector('#cafe-list');

function render_element(doc){

    var liTag = document.createElement("li");
    liTag.innerHTML = "<b>Hotel Name:</b> "+doc.data().name+" <b>Place:</b> "+doc.data().city;
    cafeList.appendChild(liTag);
    //console.log(doc.data().name+" => "+doc.data().city);
}

db.collection('cafes').get().then((snapshot)=>{
    console.log('--db loaded--');
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc=>{
        render_element(doc)
    })
})