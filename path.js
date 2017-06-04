const magik = magikcraft.io;

function path(typ){
    typ = typ || "STONE"
    const Material = magik.type("Material");
    const blocks = magik.getSender().getLineOfSight(null,50);
    blocks.forEach(b => b.getRelative(0, -2, 0).setType(Material[typ]));    
       
}
