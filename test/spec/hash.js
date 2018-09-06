
describe('Map Hash Test', function () {
  var el;
  var map;
  var fakeResult;

  before(function (done) {
    fakeResult = require('../fixtures/autocomplete.json');
    done();
  })

  beforeEach(function () {
    el = document.createElement('div');
    document.body.appendChild(el);
    map = L.Nextzen.map(el,{
      _useTangram: false
    });
  });

  afterEach(function () {
    el.parentNode.removeChild(el);
  })

  describe('Hash Working', function () {
    it('checks that hash for coord is working', function () {
      map.setView([51.505, -0.09], 13);
      var hash = L.Nextzen.hash({
        map: map
      });
      var zoom = hash._roundZDown(map.getZoom());
      var center = map.getCenter();

      var getPrecision = function (z) {
        return Math.max(0, Math.ceil(Math.log(z) / Math.LN2));
      };

      var precision = hash._precision(zoom);

      var hashLat = center.lat.toFixed(precision);
      var hashLng = center.lng.toFixed(precision);
      var hashVal = window.location.hash;
      hash._reset(); // For next test

      expect(hashVal).to.equal('#lat=' + hashLat + '&lng=' + hashLng + '&z=' + zoom);
    });

  })
});
