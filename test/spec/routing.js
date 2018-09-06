describe('Routing Test', function () {
  var el;
  var map;

  describe('Basic Routing Check', function () {

    it('checks routing component is initialized.', function (done) {
      var routingControl = L.Nextzen.routing.control({
        router: L.Nextzen.routing.router({costing: 'bicycle'})
      });
      done();
    });

    it('checks routing component with both apikey and option is initialized', function (done) {
      var routingControl = L.Nextzen.routing.control({
        router: L.Nextzen.routing.router('mapzen-cstHyBQ', {costing: 'bicycle'})
      });
      done();
    });

  })
});
