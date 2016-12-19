var magik = magikcraft.io;
//debug

function d(spell){
    var thing= magik;  //magik.dixit

    
    //thing = keys.map(function(k) {return magik[k].toString();});  //obviously going to be too long
    
    keys  = getKeys(magik);
    if (isNumeric(spell)) {
        thing = magik[keys[parseInt(spell)]];
    } else if (typeof(spell) == 'string') {
        thing = magik[spell];
        if (typeof(thing) == 'undefined') {
            thing = eval(spell);
            /*if (typeof(thing) == 'object') {
                magik.dixit("nested");
                thing = getKeys(thing);
            }*/
        }
    }  else {
        thing = keys;
    }
    msg = thing.toString();
    magik.dixit(msg);
    magik.dixit(encodeURI("http://abznak.com/echo?q="+msg)); 
       
}
function getKeys(obj) {
    var keys = [];
    for (var key in obj) {
     // if (obj.hasOwnProperty(key)) {
        keys.push(key);
     // }
    }
    return keys;
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

