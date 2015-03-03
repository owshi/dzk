(function() {
    //This is attempt to make prototypical inheritance by making prototype of Ukrainian land kadaster

    var registeredArray = [],
        zemKadastr = function() {
            this.name = 'Державний земельний кадастр';
        }

    Object.prototype.zemDilyanka = function() {
        var zemdil = this;
        zemdil.pravoviPolojenniya = {

        }
        zemdil.obmejennya = {};

        zemdil.roztashuv = {
            oblast: '',
            rayon: '',
            nasPunkt: ''
        };

        zemdil.kadastrNomer = {};

        zemdil.coords = {};
        zemdil.ploscha = null;

        zemdil.yakist = {};
        zemdil.vlasnik = {
            firstName: '',
            lastName: '',
            thirdName: '',
            passport: {
                seria: '',
                nomer: null,
                kimVidano: '',
                dataVidachi: '',
                propiska: {
                    oblast: '',
                    nasPunkt: '',
                    vulitsya: '',
                    budinok: null,
                    kvartyra: null,
                    korpus: null
                }
            },
            identifikaciniiNomer: null,
            derjAkt: {
                nomer: null,
                kolyVidano: '',
                kimVidano: '',
                ploscha: ''
            }
        };
        zemdil.korystyvach = {
            firstName: '',
            lastName: '',
            thirdName: '',
            passport: {
                seria: '',
                nomer: 534633,
                kimVidano: '',
                dataVidachi: '',
                propiska: {
                    oblast: '',
                    nasPunkt: '',
                    vulitsya: '',
                    budinok: 3,
                    kvartyra: '',
                    korpus: null
                }
            }
        };

        zemdil.addKadastrNum = function(zone, rayon, kvartal, dilyanka) {
            zemdil.kadastrNomer.zone = zone;
            zemdil.kadastrNomer.rayon = rayon;
            zemdil.kadastrNomer.kvartal = kvartal;
            zemdil.kadastrNomer.dilyanka = dilyanka;
            zemdil.kadastrNomer.nomer = zone + ":" + rayon + ":" + kvartal + ":" + dilyanka;
        };

        zemdil.addCoord = function(tochka, x, y, z) {
            zemdil.coords[tochka] = {};
            zemdil.coords[tochka].x = x || null;
            zemdil.coords[tochka].y = y || null;
            zemdil.coords[tochka].z = z || null;
        };
    }

    function addNewLand() {
        var zemDil = {};
        zemDil.zemDilyanka();
        registeredArray.push(zemDil)
    }
    addNewLand()
    console.log(registeredArray[0])
})();
