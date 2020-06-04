firebase.initializeApp({
    apiKey: 'AIzaSyB6C508JEqZrMrEbfLgkFJhdisCL-hb-5E',
    projectId: 'test-25af0',
});

var db = firebase.firestore();//use db to store firebase
var documentRef = db.collection('score').doc('default');//documentRef to store the data inside db

var content = window.document.getElementById('content');//set var content to store the document, and get the id from content
var minus = document.getElementById('minus');// get the minus function by id call minus

var score = 0;
// var time = 100;
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
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = seconds + "s ";

  if(seconds<=0){
    score = parseInt(content.innerHTML, 10) - 1;
    documentRef.set({'current': score});
    content.innerHTML = score;
  }
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);

