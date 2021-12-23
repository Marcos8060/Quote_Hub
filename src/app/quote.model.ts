export class Quote{
    public id: any;
    public quote!: string;
    public author!: string;
    public blogger!: string;
    public upvotes = 0;
    public downvotes = 0;
    public startTime = new Date().getTime();

    static getRandomId(){
        return Math.floor(Math.random() * 10000)
    }

    constructor(id:any,quote:string,author:string,blogger:string){
        this.id = id;
        this.quote = quote;
        this.author = author;
        this.blogger = blogger;
    }
}
