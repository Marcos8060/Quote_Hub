export class Quote{
    public id: any;
    public quote!: string;
    public author!: string;
    public blogger!: string;

    static generateRandomId(){
        return Math.floor(Math.random() * 10000)
    }

    constructor(id:any,quote:string,author:string,blogger:string){
        this.id = id;
        this.quote = quote;
        this.author = author;
        this.blogger = blogger;
    }
}
