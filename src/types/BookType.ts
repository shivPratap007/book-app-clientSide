export interface Book{
    _id:string;
    title:string;
    author:{_id:string,name:string};
    genre:string;
    coverImage:string;
    file:string;
    __v:number;
}