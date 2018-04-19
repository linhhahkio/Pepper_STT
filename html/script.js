// global session
var session = new QiSession(function(session) {
                // document.getElementById('typed').innerHTML = "Connection esterblished!";
              }, function() {
                // document.getElementById('typed').innerHTML = "Could not connect to the robot";
              });


// Subscribe to ALMemory Service
session.service("ALMemory").then(function(ALMemory) {
  // document.getElementById('typed').innerHTML = "ALMemory proxy subscription successful!";
  ALMemory.getData('subject').then(function Mail(subject){

    var x = String(subject);


    document.getElementById("subject").innerHTML = x;

  });

 ALMemory.getData('message').then(function (message){

    var x = String(message);

    document.getElementById("message").innerHTML = x;

  });

});
