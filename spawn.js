var magik = magikcraft.io;

function spawn(typ, n, times, baseloc){
    n = parseInt(n) || 20;
    times = parseInt(times) || 1;
    var sender2 = sender;
    if (typ == '.') {
        typ = undefined;
    }
    if (!baseloc) {
        baseloc = create_spawn_point(magik.aspecto());
    }
        

    //var arrow = player.getWorld().spawnEntity(sender.location, org.bukkit.entity.EntityType.ZOMBIE);
    
    for (var i = 0; i < n; i++) {
        var loc = rndBlock(baseloc.getBlock().getRelative(0, 0, 0).location, 4,0).location;
        //var loc = magik.aspecto().getBlock().getRelative(0, 2, 0).location;
        //TODO: set pitch and yaw, try with fireball again
        //var arrow = player.getWorld().spawnEntity(loc, org.bukkit.entity.EntityType.DRAGON_FIREBALL);
        var typ2 = typ || rnd_monster_type();
        var arrow = loc.getWorld().spawnEntity(loc, org.bukkit.entity.EntityType[typ2]); 
//        arrow.setShooter(sender);
        var v = sender.getEyeLocation().getDirection().multiply(2);
        
        var dir = Math.PI*2*Math.random();
        var scale = 0.25;
        v.setX(scale*Math.sin(dir));
        v.setY(scale*4);
        v.setZ(scale*Math.cos(dir));
        //magik.dixit(loc);
        arrow.setVelocity(v);
        //arrow.setDirection(v);
        //arrow.setMetadata("ArrowType", new MyMetadata(this, "stick"));    
        //magik.dixit(arrow);
    }
    
    times -= 1;
    if (times > 0) {
        //magik.dixit(plugin);
        var task = magik.setTimeout(
            function() {
                sender = sender2;
                spawn(typ, n, times, baseloc);
                //magik.dixit("timeout!")
            }, 
            200
        );
        //magik.dixit(task);
    }
        
}

function create_spawn_point(loc) {
    var block = loc.getBlock();
    var r = 1;
    var depth = 3;
    for (x = -r; x <= r; x++) {
        for (y = -r; y <= r; y++) {
            for (z = -depth; z <= 0; z++) {
                block.getRelative(x,z,y).setType(org.bukkit.Material['AIR']);
            }
        }
    }
    
    var spawnloc = block.getRelative(0, -depth, 0).getLocation();
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

