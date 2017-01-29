var magik = magikcraft.io;



function spawn(typ, n, times, baseloc){
    sender = server.getPlayer(sender.getName());
	if (typ == '?') {
		magik.dixit("/spawn <typ> <n> <times>");
		magik.dixit("typ - ZOMBIE or CREEPER etc, dot (.) for a mix");
		magik.dixit("n - number to spawn per wave");
		magik.dixit("times - number of waves");
		magik.dixit("for example, try: /cast spawn . 5 30");
		return;
	}
    n = parseInt(n) || 5;
    times = parseInt(times) || 5;
    var sender2 = sender;
    if (typ == '.') {
        typ = undefined;
    }
    if (!baseloc) {
        baseloc = create_spawn_point(magik.aspecto());
    }

    for (var i = 0; i < n; i++) {
        var loc = rndBlock(baseloc.getBlock().getRelative(0, 0, 0).location, 4,0).location;
        var typ2 = typ || rnd_monster_type();
        var mob = loc.getWorld().spawnEntity(loc, org.bukkit.entity.EntityType[typ2]); 
        var v = sender.getEyeLocation().getDirection().multiply(2);
        
        var dir = Math.PI*2*Math.random();
        var scale = 0.45;
        v.setX(scale*Math.sin(dir));
        v.setY(scale*2);
        v.setZ(scale*Math.cos(dir));
        mob.setVelocity(v);
    }
    
    times -= 1;
    if (times > 0) {
        var task = magik.setTimeout(
            function() {
                sender = sender2;
                spawn(typ, n, times, baseloc);
            }, 
            200
        );
    }
        
}

function create_spawn_point(loc) {
    var block = loc.getBlock();
    var r = 1;
    var depth = 3;

    var spawnloc = block.getRelative(0, -depth, 0).getLocation();


    
    //explicitly clear a space
    for (y = -depth; y <= 0; y++) {
        var rr = Math.floor(r);  //for changing the shape of the hole.  I liked no slope, in the end
        for (x = -rr; x <= rr; x++) {
            for (z = -rr; z <= rr; z++) {
                block.getRelative(x,y,z).setType(org.bukkit.Material['AIR']);
            }
        }
    }
    
    //explode that space, for effect and to mess up the shape a little
    spawnloc.getWorld().createExplosion(spawnloc,3);
    
    return spawnloc;
}


function rnd_monster_type() {
    var types = [
        'ZOMBIE',
        'ZOMBIE',
        'ZOMBIE',
        'ZOMBIE',
        'ZOMBIE',
        'SPIDER', 
        'SPIDER',
        'SPIDER',
        'CREEPER',
        'CREEPER',
        'WITCH'
        ];
    return rnd_from_array(types);
}

function rnd_from_array(arry) {
    return arry[Math.floor(Math.random()*arry.length)];

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


