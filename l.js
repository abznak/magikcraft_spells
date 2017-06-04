const magik = magikcraft.io;

// explode  
function l(repeats = 1, delay = 200) {
    const sender = magik.getSender();
    magik.shakti();        
    repeats--;
    if (sender.isSneaking()) {
        magik.dixit("l done via sneak");
        return;
    }
    if (repeats > 0) {
        const task = magik.setTimeout(
            () => {
                l(repeats, delay);
            },
            delay
        );
    } else {
        magik.dixit("l done");
    }
}


