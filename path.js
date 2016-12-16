var magik = magikcraft.io;

function path(typ){
    typ = typ || "STONE"
    
    blocks = sender.getLineOfSight(null,50);
    blocks.forEach(function(b){
        b.getRelative(0, -2, 0).setType(org.bukkit.Material[typ]);
    });    
       
}
