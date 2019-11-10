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
        this.image = "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwis-IzmmuDlAhXOuFkKHfx5AogQjRx6BAgBEAQ&url=https%3A%2F%2Faliceasmartialarts.com%2Fhome%2Fdefault-image%2F&psig=AOvVaw03RGfaEcToebXm8Z2jbMv9&ust=1573494731990596";//add default
     
    }
}