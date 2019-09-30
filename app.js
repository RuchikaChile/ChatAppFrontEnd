var chatApplication = angular.module('chatApplication', ['ui.router', 'btford.socket-io']);

chatApplication.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'template/register.html',
            controller: 'controlRegister'
        })
   
        .state('chat', {
            url: '/chat',
            templateUrl: 'template/chatapp.html',
            controller: 'chatControl'
        })
  
        .state('login', {
            url: '/login',
            templateUrl: 'template/login.html',
            controller: 'controlLogin'
        })
        
        .state('forget', {
            url: '/forget',
            templateUrl: 'template/forget.html',
            controller: 'controlForget'
        })

        .state('reset', {
            url: '/reset/:token',
            templateUrl: 'template/reset.html',
            controller: 'controlReset'
        })

        $urlRouterProvider.otherwise('/login');
});
chatApplication.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    console.log(" chat connected");
    return socketFactory({
        ioSocket: io.connect('http://3.17.151.48:4000/')
    });
}]);