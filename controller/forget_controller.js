chatApplication.controller('controlForget', function ($scope, serviceForget) {
    console.log("Forget  calling");
    $scope.forget = function () {
        var forgetuser = {
            'emailid': $scope.emailid     
        }
        console.log("forget calling", forgetuser);
        serviceForget.forgetUser(forgetuser, $scope);
    }
});