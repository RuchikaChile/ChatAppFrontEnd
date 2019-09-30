chatApplication.service('chatService', function ($http,$location) 
{
    try {
       
        //displaying all users
        this.displayAllUser = function ($scope, token) 
        {
            console.log(" In service chat")
            token = localStorage.getItem('token');
            $http({
                method: 'GET',
                url: 'http://3.17.151.48:4000/displayAllUser',
                headers: {
                     token: token
                }
            }).then(
                function successCallback(response) {
                    $scope.displayAllUser = response.data.result.data;
                    console.log("Response in chat service", $scope.displayAllUser)
                    console.log("Successfully display all users!!");
                    $scope.currentUser = $scope.emailid;
                },
                function errorCallback(response) {
                    console.log("Failed to display all users");
                    console.log(response);
                    $location.path('/login');
                }
            );
        },

        //getusermessages
        this.getUserMessage = function ($scope, usertoken) 
        {
            console.log("In getusermsg service")
            var array = []
            var usertoken = localStorage.getItem('token'); 
     
            console.log(" Token in getusermessage method ", usertoken);
            $http({
                method: 'GET',
                url: 'http://3.17.151.48:4000/getUserMessage',
                headers: {
                    'token': usertoken,
                }
            }).then(
                function successCallback(response) 
                {
                    console.log("Displaying all users messages:",response.data);
                    for( var i =0; i < (response.data.result.length); i++) 
                    {
                        
                        var list = response.data.result[i];
                        if((localStorage.getItem('userId') == list.senderId) && (localStorage.getItem('receiveruserId') == list.receiverId)  ||  (localStorage.getItem('userId') == list.receiverId) && (localStorage.getItem('receiveruserId') == list.senderId))
                        {
                            array.push(list);
                        }
                    }   
                    $scope.getallMessages = array;
                    console.log("Array: ",array);
                    console.log("All messages of users:  ",$scope.getallMessages); 
                    // return array;  
                },
                function errorCallback(response) {
                    console.log("Failed to display Messages of Users ");
                    console.log(response);
                }
            );
        }
    }
    catch (err) {
        console.log("Error in chat service..");
    }
})