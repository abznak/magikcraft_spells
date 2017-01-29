var magik = magikcraft.io;

// r - radius
// typ - material type (e.g. FIRE, TNT)
// force - 1 - replace even solid blocks, ! - replace only solid blocks
// fire - 1 - set the resulting sphere on fire, o - surround the resulting sphere in obsidian
function jail(r, typ, force, fire) {
    r = parseInt(r) || 10;
    typ = typ || 'LEAVES';
    var block = magik.aspecto().getBlock();
    drawSphere(block, r, typ, force);
    if (fire) {
        if (fire == 'o') {
            drawSphere(block, r+2, 'OBSIDIAN', false);
        } else if (fire == 'g') {
            drawSphere(block, r+2, 'GLASS', false);
        } else {
            drawSphere(block.getRelative(0, 2, 0), r, 'FIRE', false);
        }
    }
}
function drawSphere(block, r, typ, force) {
    sphere(block, r, function(block, x,y,z) {
        var doit = false;
        if (force == '1') {
            doit = true;
        } else {
            doit = !block.getType().isSolid();
            if (force == '!') {
                doit = !doit;
            }
        }
        if (doit) {
            block.setType(org.bukkit.Material[typ]);
        }
    });
}
function sphere(block, r, fn) {    

    var max2 = (r+1) * (r+1);
    var min2 = (r-1) * (r-1);
    for (var x = -r; x < r+1; x++) {
        for (var y = -r; y < r+1; y++) {
            for (var z = -r; z < r+1; z++) {
                var dist2 = x*x+y*y+z*z;
                
                if (min2 <= dist2 && dist2 <= max2) {
                    fn(block.getRelative(x,y,z), x,y,z);
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

