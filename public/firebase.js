firebase.initializeApp({
    apiKey: 'AIzaSyB6C508JEqZrMrEbfLgkFJhdisCL-hb-5E',
    projectId: 'test-25af0',
});

var db = firebase.firestore();

db.collection("score").doc('default').get().then((dataSnapshot) => {
    var data = dataSnapshot.data();
    var elem = window.document.getElementById('content');
    console.log(elem);
    elem.innerHTML = data.current;
})
.catch(function(error) { console.error("Error reading link: ", error); });