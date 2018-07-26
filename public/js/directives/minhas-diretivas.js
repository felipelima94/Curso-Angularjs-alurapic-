angular.module('minhasDiretivas',[])
    .directive('meuPainel', () => {
        return {
            restrict : "AE",
            transclude : true,
            scope : {
                titulo : "@"
            },
            templateUrl : "js/directives/meu-painel.html"
        }
    });