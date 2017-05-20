(function(app) {
  var Class = ng.core.Class;

  app.HoraAtualService = Class({
    constructor: function HoraAtualService() {
      this.data = new Date();
    },
    getHora: function() {
      return this.data.getHours().toString().concat(":",this.data.getMinutes().toString());
    },
    generateHora: function(delay, callback) {
      var self = this;
      callback(this.getHora());
      setInterval(function() {
        callback(self.getHora());
      }, delay);
    }
  });  

  var data = new Date(); 

})(window.app || (window.app = {}));
