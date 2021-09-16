class video{
    titulo:string;
    constructor(titulo:string){
        this.titulo = titulo;
    }
    reproducir():void{
        console.log(`${this.titulo} se esta reproduciendo`);
    }
}

const mivideo = new video("ano nuevo");
mivideo.reproducir();