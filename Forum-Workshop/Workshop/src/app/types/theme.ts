export interface Theme {
  _id: string;
  themeName: string;
  subscribers: string[];
  posts: any; //string[] | Post[];
  userId: {
    _id: string;
    themes: string[];
    posts: string[];
    tel: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
    updatedAt: string;
    __v: number;
  };
  created_at: string;
  updatedAt: string;
  __v: number;
}
