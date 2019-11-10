export class Movie {
    id: number;
    title: string;
    release: Date;
    description: string;
    image: string;

    constructor() {
        this.id = 0;
        this.title = '';
        this.release = new Date();
        this.description = '';
        this.image = null;//add default
     
    }
}