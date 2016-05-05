
var myApp = angular.module('myApp', ["firebase"]);
myApp.controller('formCtrl', function($scope)
{
  $scope.createAccount= function()
  {
    var ref = new Firebase("https://venme.firebaseio.com/");
    var userAccounts = ref.child("User Accounts");
    var theEmail = "";
    var thePhone = "";
    var theName = "";

    ref.createUser({
      email    : $scope.email,
      username  : $scope.user,
      phone    : $scope.phone,
      password : $scope.password

    },
    function(error, userData)
    {
      if (error)
      {
        console.log("Error creating user:", error);
        alert(error + " Please try another email.");
      } else
      {
        //Setting up the variable fields to pass to firebase
        theEmail = $scope.email;
        thePhone = $scope.phone;
        theName = $scope.user;

        //comment out once working
        console.log("Successfully created user account with uid:", userData.uid);

        //Passing the variable fields to firebase to the users unique id
        userAccounts.child(userData.uid).set({
          theUserEmail: theEmail,
          //theUserName: theName,
          theUserPhone: thePhone
        });

        //Go back to the login screen to login in once everything is created
        window.location.href = 'loginScreen.html';
      }
    });
  }
});
