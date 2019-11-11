export class Movie {
    id: string;
    title: string;
    release: Date;
    description: string;
    image: string;

    constructor() {
        this.id = '';
        this.title = '';
        this.release = new Date();
        this.description = '';
        this.image = '';
     
    }
}