chatApplication.service('serviceReset', function ($http, $location) {
    this.resetUser = function (data,headers, $scope) {
        console.log("Data on service reset", data);
        console.log("header token in reset", headers.token);
        $http({
            method: 'POST',
            url: 'http://3.17.151.48:4000/reset/:token',
            data: data

        }).then(
            function successCallback(response) {
                console.log("reset password successfully");
                console.log(response);  
                $location.path('/reset');         
            },
         
        ).catch(function errorCallback(response) {
            console.log("reset  unsuccessful", response);
            
        });
    }
});