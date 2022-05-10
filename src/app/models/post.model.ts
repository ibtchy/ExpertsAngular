import { Commentaire } from "./commentaire.model";

export class Post {
    id?: any;
    content?: string;
    date?:Date;
    commentaires?:Commentaire[]
    postlikes?:any;
}
