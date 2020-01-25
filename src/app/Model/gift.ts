export class Gift {
    constructor(public level: string, public desc: string, public iurl:string, public donator:string, public owner: string){
        this.level = level;
        this.desc = desc;
        this.iurl = iurl;

        this.donator = donator;
        this.owner = owner;
    }
}
