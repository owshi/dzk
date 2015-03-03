//This is attempt to make prototypical inheritance by making prototype of Ukrainian land kadaster

var registeredArray = [],
    zemKadastr = function() {
        this.name = 'Державний земельний кадастр';
    }

Object.prototype.zemDilyanka = function() {

    this.cilPrizn = '';
    this.obmejennya = {};

    this.roztashuv = {
        oblast: '',
        rayon: '',
        nasPunkt: ''
    };

    this.kadastrNomer = {
    };

    this.coords = {};
    this.ploscha = null;

    this.yakist = {        
    };
    this.vlasnik = {
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
    this.korystyvach = {
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

    this.addKadastrNum = function(zone, rayon, kvartal, dilyanka) {
        this.kadastrNomer.zone = zone;
        this.kadastrNomer.rayon = rayon;
        this.kadastrNomer.kvartal = kvartal;
        this.kadastrNomer.dilyanka = dilyanka;
        this.kadastrNomer.nomer = zone + ":" + rayon + ":" + kvartal + ":" + dilyanka;
    };

    this.addCoord = function(tochka, x, y, z) {
        this.coords[tochka] = {};
        this.coords[tochka].x = x || null;
        this.coords[tochka].y = y || null;
        this.coords[tochka].z = z || null;
    };
}
function addNewLand(){
    var zemDil = {};
    zemDil.zemDilyanka();
    registeredArray.push(zemDil)
}


console.log(registeredArray)