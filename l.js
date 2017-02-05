var magik = magikcraft.io;

// explode  
function l(n, repeats, delay) {
    var sender2 = sender;
    n = parseInt(n) || 30;
    repeats = parseInt(repeats) || 1;
    delay = parseInt(delay) || 200;
    //sender.location.getWorld().createExplosion(magik.aspecto(),n);
    magik.fulmen();        
    repeats--;
    //magik.dixit(sender.isSneaking() ? "yes" : "no");
    if (sender.isSneaking()) {
        magik.dixit("e done via sneak");
        return;
    }
    if (repeats > 0) {
        var task = magik.setTimeout(
            function() {
                sender = sender2;
                l(n, repeats, delay);
            },
            delay
        );
    } else {
        magik.dixit("e done");
    }
}


