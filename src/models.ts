export interface UserInfo {
    dateAndTime: Date;
    biography: string;
    fullName: String;
    followersCount: number;
    post:Post;
  }
  
  export interface Post {
    url:String;
    mediaURL:string;
    numberOfLikes:number;
    numberOfComments:number;
    type: PostType
  }
  
   export enum PostType{
    CAROUSEL = "carousel",
    IMAGE= 'image',
    VIDEO ='video'
  }
  