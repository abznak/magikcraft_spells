var magik = magikcraft.io;

function jail(r, typ) {
    r = parseInt(r) || 10;
    sphere(magik.aspecto().getBlock(), r, typ);
}
function sphere(block, r, typ) {    
    typ = typ || 'LEAVES';
    var max2 = (r+1) * (r+1);
    var min2 = (r-1) * (r-1);
    for (var x = -r; x < r+1; x++) {
        for (var y = -r; y < r+1; y++) {
            for (var z = -r; z < r+1; z++) {
                var dist2 = x*x+y*y+z*z;
                
                if (min2 <= dist2 && dist2 <= max2) {
                    
                    block.getRelative(x,y,z).setType(org.bukkit.Material[typ]);
                }
            }
        }
    }

}


function randn_bm() {
    var u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1].
    var v = 1 - Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}


function rnorm_unit(count) {
    var ret = 0;
    for (var i = 0; i < count; i++) {
        ret += Math.random();
    }
    return ret/count;
}
function rnorm(mean, sd) {
    return randn_bm() * sd + mean;
}
function runif(from, to) {
    return scale(Math.random(), from, to);
}
function scale(r, from, to) {
    return Math.floor(r*(to - from)+from)
}
function rndBlock(loc, radius, height) {
    return loc.getBlock().getRelative(rnorm(0, radius/5), runif(0, height), rnorm(0, radius/5));
}

