var magik = magikcraft.io;

// lightning  
// lpc - lightning per circle
// cc - circle count
function l2(lpc, cc, i, delay) {
    lpc = parseInt(lpc) || 10;
    cc = parseInt(cc) || 3;
    i = parseInt(i) || 0;
    m = parseInt(m) || 30;
    delay = parseInt(delay) || 100;

    magik.dixit("m2 - "+ m + " " + i + " " + delay);


    var oldloc = magik.hic();
    var target = magik.hic();
    i++;     
    for (var k = 0; k < m; k++) {
        target.yaw = 360/m*k;
        target.pitch = 90 - i * 5;
        magik.ianuae(target);  
        magik.fulmen();        
    }
    

    if (sender.isSneaking()) {
        magik.dixit("l2 done via sneak");
        return;
    }
    if (i < cc) {
        var task = magik.setTimeout(
            function() { 
                magik.dixit(sender);              
                l2(lpc, cc, i, delay);
            },
            delay
        );
    } else {
        magik.dixit("e done");
    }
}


