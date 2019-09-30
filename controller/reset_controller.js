chatApplication.controller('controlReset', function ($scope, serviceReset, $stateParams) {
    console.log("Reset Controller");
    console.log("ctrl reset in controlller pswd", $stateParams.token)
    $scope.reset = function () {
        var resetuser = {
            'password' : $scope.password
            
        }
        var token = {
            'token': $stateParams.token
        }
        console.log("resetuser data", resetuser);
        serviceReset.resetUser(resetuser,token, $scope);
    }
});