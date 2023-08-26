export interface Post {
  _id: string;
  text: string;
  likes: string[];
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
  themeId: {
    _id: string;
    themeName: string;
    subscribers: string[];
    posts: string[];
    userId: string;
    created_at: string;
    updatedAt: string;
    __v: number;
  };
  created_at: string;
  updatedAt: string;
  __v: number;
}
