export interface IPicture {
  id: string,
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
}
