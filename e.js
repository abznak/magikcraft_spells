var magik = magikcraft.io;

// explode  
function e(n=30, repeats=1, delay=200) {
    const sender = magik.getSender();
    sender.getLocation().getWorld().createExplosion(magik.aspecto(),n);        
    repeats--;
    //magik.dixit(sender.isSneaking() ? "yes" : "no");
    if (sender.isSneaking()) {
        magik.dixit("e done via sneak");
        return;
    }
    if (repeats > 0) {
        var task = magik.setTimeout(
            () => {
                e(n.toString(), repeats, delay);
            },
            delay
        );
    } else {
        magik.dixit("e done");
    }
}

