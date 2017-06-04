const magik = magikcraft.io;

// lightning  
// lpc - lightning per circle
// cc - circle count
function l2(lpc = 10, cc = 3, i = 0, delay = 100) {
    const m = 30;
    const sender = magik.getSender();
    magik.dixit("l2 - "+ m + " " + i + " " + delay);

    const oldloc = magik.hic();
    const target = magik.hic();
    i++;     
    for (var k = 0; k < m; k++) {
        target.setYaw(360/m*k);
        target.setPitch(90 - i * 5);
        magik.ianuae(target);  
        magik.shakti();        
    }

    if (sender.isSneaking()) {
        magik.dixit("l2 done via sneak");
        return;
    }
    if (i < cc) {
        var task = magik.setTimeout(
            () => {             
                l2(lpc, cc, i, delay);
            },
            delay
        );
    } else {
        magik.dixit("l2 done");
    }
}


