// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCV97UoADCq8xc6D_BG-MxcoIsUzpMTiOI",
  authDomain: "test-cb531.firebaseapp.com",
  databaseURL: "https://test-cb531.firebaseio.com",
  projectId: "test-cb531",
  storageBucket: "test-cb531.appspot.com",
  messagingSenderId: "772820957387",
  appId: "1:772820957387:web:a84055a7ba0fda79cb034e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference for form collection(3)
let formMessage = firebase.database() //.ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let phone = document.querySelector('#phone').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let bio = document.querySelector('#bio').value;
  let job = document.querySelector('#job').value;
  let interest = document.querySelector('#interest').value;

  //send message values
  sendMessage(name, phone, email, password, bio, job, interest);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, phone, email, password, bio, job, interest) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    phone: phone,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest
  });
}
