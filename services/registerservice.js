chatApplication.service('serviceRegister', function ($http, $location) {
    console.log('registerservice.js')
    this.registerUser = function (data, $scope) {
        console.log("Data in service register: ", data);
        $http({
            method: 'POST',
            url: 'http://localhost:4000/register',
            data: data

        }).then(
            function successCallback(response) {
                $scope.register = function(){
                    alert("Registration Done Successfully!!");
                } 
                console.log("registration successful");
                console.log(response);
                $location.path('/register');
            },
        ).catch(function errorCallback(response) {
            $scope.register = function(){
                alert("Registration Failed!!");
            } 
            console.log("registration  unsuccessful", response);
            
        });
    }
});




