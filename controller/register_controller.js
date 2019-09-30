chatApplication.controller('controlRegister', function ($scope, serviceRegister) {
    $scope.register = function () {
        var user = {
            'firstname': $scope.firstname,
            'lastname': $scope.lastname,
            'mobileno': $scope.mobileno,
            'emailid': $scope.emailid,
            'password': $scope.password,
        }
        serviceRegister.registerUser(user, $scope);
    }
    
});


