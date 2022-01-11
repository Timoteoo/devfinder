export interface UserData {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  blog: string;
  twitter_username: string;
  location: string;
  company: string;
  created_at: string;
  message?: string;
}

export interface SearchContextValues {
  userData: UserData | null;
  setUserData: (data: UserData | null) => void;
}
