const cafeList      = document.querySelector('#cafe-list');
const formObj       = document.getElementById('add-cafe-form');
const hotel_name    = document.getElementById('hotel_name');
const hotel_city    = document.getElementById('hotel_city');

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

function submit_form(){
    if(hotel_name.value && hotel_city.value){
        console.log('111111111111');

        db.collection('cafes').add({
            name:hotel_name.value,
            city:hotel_city.value
        });

        hotel_name.value  ,hotel_city.value = '';
    }
}