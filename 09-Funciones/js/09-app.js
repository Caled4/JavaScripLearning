const reproductor={
    reproducir:function(id){
        console.log(`reproduciendo cancion con el id ${id}`)
    },
    pausar:function(){
        console.log(`pausando...`)
    },
    borrar: function(id){
        console.log(`borrando cancion..${id}`)
    },
    crearPlayList:function(nombre){
        console.log(`creando play list de ${nombre}`)
    },
    reproducirPlayList(nombre){
        console.log(`se esta reproduciendo la play list ${nombre} `)
    }
}

reproductor.reproducir (30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlayList(`Heavy metal`)
reproductor.reproducirPlayList(`heavy metal`)