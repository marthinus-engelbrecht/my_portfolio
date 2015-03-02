(function(app){
    app.factory('Flow', function () {
        return{
            notify: function (context) {
                this._context = context;
            }
        }
    });
})(angular.module('blaze.flowDirective', ['ui-router']));

