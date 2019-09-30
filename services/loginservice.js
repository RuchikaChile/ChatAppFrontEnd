chatApplication.service('serviceLogin', function ($http, $location, SocketService) {
    this.loginUser = function (data, $scope) {
        console.log("Data on Login Service: ", data);
        $http({
            method: 'POST',
            url: 'http://localhost:4000/login',
            data: data

        }).then(
            function successCallback(response) {
                $scope.login = function(){
                    alert("Login Successfully Done!!!!");
                    $location.path('/chat');
                };
                console.log("Login successful in console",response);
                localStorage.setItem('userfirstname',response.data.result.data.firstname);
                localStorage.setItem('userId',response.data.result.data._id);
                localStorage.setItem('emailid',response.data.result.data.emailid);
                localStorage.setItem('token',response.data.result.token.token);
            },     
        ).catch(function errorCallback(response) {
            $scope.login = function(){
                alert("Login Failed!!!!");
            };
            $location.path('/login');
            console.log("Login  Failed", response); 
        });
    }
    SocketService.on('connection', function(data){
        console.log(data);
    });
});