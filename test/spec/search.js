describe('Search Test', function () {
  var el;
  var map;
  var fakeResult;

  describe('Basic Geocoder Check', function () {
    it('checks geocoder is initialized', function (done) {
      var geocoder = L.Nextzen.geocoder();
      done();
    });

    it('checks geocoder with api key is initialized', function (done) {
      var geocoder = L.Nextzen.geocoder('mapzen-cstHyBQ');
      done();
    });

    it('checks geocoder with option is initialized', function (done) {
      var geocoder = L.Nextzen.geocoder({
        autocomplete: false,
        attribution: 'test attribution'
      });
      done();
    });

    it('checks geocoder with both api key and option is initialized', function (done) {
      var geocoder = L.Nextzen.geocoder('mapzen-cstHyBQ', {
        autocomplete: false
      });
      done();
    });

  })
});
