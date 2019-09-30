chatApplication.service('serviceForget', function ($http, $location) {
    this.forgetUser = function (data, $scope) {
        console.log("data on service forget---", data);
        $http({
            method: 'POST',
            url: 'http://3.17.151.48:4000/forget',
            data: data

        }).then(
            function successCallback(response) {
                console.log("forget successful so you can reset your password");
                console.log(response);
                $scope.forget = function(){
                    alert("Forget Password!!!!");
                };
                $location.path('/forget');
            },
        ).catch(function errorCallback(response) {
            $scope.forget = function(){
                alert("Failed to Forget Password!!!!");
            };
            console.log("forget  unsuccessful", response);
          
        });
    }
});