export interface IPicture {
  alt_description: string,
  blur_hash: string,
  color: string,
  created_at: string,
  current_user_collections:[],
  description: string,
  height: number,
  id: string,
  liked_by_user: boolean,
  likes: number,
  links: {
    self: string,
    html: string,
    download: string,
    download_location: string,
  }
  promoted_at: null,
  sponsorship: null,
  tags: any[],
  topic_submissions: any,
  updated_at: string,
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string,
  }
  user: {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string,
  }
  width:number,
}
