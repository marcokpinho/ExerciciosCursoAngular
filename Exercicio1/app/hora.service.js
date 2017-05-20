(function(app) {
  var Class = ng.core.Class;

  app.HoraAtualService = Class({
    constructor: function HoraAtualService() {},
    getHora: function() {
      this.data = new Date();
      return this.data.getHours().toString().concat(":",this.data.getMinutes().toString(),":",this.data.getSeconds().toString());
    },
    generateHora: function(delay, callback) {
      var self = this;
      callback(this.getHora());
      setInterval(function() {
        callback(self.getHora());
      }, delay);
    }
  });  

})(window.app || (window.app = {}));
