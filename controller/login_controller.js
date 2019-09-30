chatApplication.controller('controlLogin', function ($scope,serviceLogin) {
    console.log("Login Controller Called")
    $scope.login = function () {
        var loginuser = {
            'emailid': $scope.emailid,
            'password': $scope.password,
        }
        console.log("loginuser: ",loginuser );
        serviceLogin.loginUser(loginuser, $scope);
    } 
});