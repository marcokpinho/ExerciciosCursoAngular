(function(app) {
  var Component = ng.core.Component;
  var HoraAtualService = app.HoraAtualService;

  app.HoraAtualComponent = Component({
    selector: 'hora-atual',
    template: '<p>{{HoraMinuto}}</p>'
  })
  .Class({
    constructor: [HoraAtualService, function HoraAtualComponent(horaAtualService) {
      var self = this;
      horaAtualService.generateHora(1000, function(horaMinuto) {
        self.HoraMinuto = horaMinuto;
      });
    }]
  });

})(window.app || (window.app = {}));
