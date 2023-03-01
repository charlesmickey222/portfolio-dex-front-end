/* ---------===== custom props ====--------- */

export interface Post{
  portfolioUrl:string;
  caption?:string;
  author:number;
  id:number;
  createdAt:string;
  updatedAt:string;
}

/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  portfolioLink?:string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
