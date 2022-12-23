const reproductor={
    // cincion:'',
    reproducir:id=>console.log(`Reproduciendo cancion con el id ${id}`),
    pausar:()=>console.log(`Pausando...`),
    borrar:(id)=>console.log(`Borrando cancion ... ${id}`),
    crearPlayList:(nombre)=>console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist:(nombre)=>console.log(`Reproduciendo la playlist ${nombre}`),
    set nuevaCancion(cancion){
        this.cancion=cancion
        console.log(`Anhadiendo ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion=`enter sandam`
reproductor.obtenerCancion

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(23)
reproductor.crearPlayList(`heavy metal`)
reproductor.reproducirPlaylist(`heavy metal`)

// ---------------------------------------------------
