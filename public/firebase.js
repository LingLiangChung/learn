firebase.initializeApp({
    apiKey: 'AIzaSyB6C508JEqZrMrEbfLgkFJhdisCL-hb-5E',
    projectId: 'test-25af0',
});

var db = firebase.firestore();
var documentRef = db.collection('score').doc('default');

var content = window.document.getElementById('content');
var minus = document.getElementById('minus');

var score = 0;

documentRef.get().then((dataSnapshot) => {
    var data = dataSnapshot.data();
    score = data.current;
    content.innerHTML = score;
})
.catch(function(error) { console.error('Error reading link: ', error); });

function modify(action) {
    score = action == 'plus' ? parseInt(content.innerHTML, 10) + 1 : parseInt(content.innerHTML, 10) - 1;
    documentRef.set({'current': score});
    content.innerHTML = score;
}
