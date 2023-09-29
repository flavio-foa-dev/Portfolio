export default interface Idata {
  id?: number
  favorite?: boolean,
  title?: string,
  type?: string,
  img?: string,
  github?: string,
  site?: string,
  youTube?: string,
};

export type Post = {
  id: number,
  title: string,
  type: string,
  img: string,
  favorite: boolean,
  github: string,
  site: string,
  youTube: string,
  tools: string,
  motivation: string,
  description: string
}