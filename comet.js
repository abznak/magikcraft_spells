var magik = magikcraft.io;

function comet(){
    var Fireball = Java.type('org.bukkit.entity.Fireball')
    //var arrow = player.getWorld().spawnEntity(sender.location, org.bukkit.entity.EntityType.ZOMBIE);
    
    for (var i = 0; i < 50; i++) {
        var loc = rndBlock(15,15).location;
        var arrow = player.getWorld().spawnEntity(loc, org.bukkit.entity.EntityType.PRIMED_TNT);
        //arrow.setShooter(sender);
        var v = sender.getEyeLocation().getDirection().multiply(2);
        v.setX(0);
        v.setY(0);
        v.setZ(0);
        //magik.dixit(loc);
        arrow.setVelocity(v);
        //arrow.setMetadata("ArrowType", new MyMetadata(this, "stick"));    
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
function rndBlock(radius, height) {
    return sender.location.getBlock().getRelative(rnorm(0, radius/5), rnorm(0, radius/5), rnorm(0, radius/5));
}
