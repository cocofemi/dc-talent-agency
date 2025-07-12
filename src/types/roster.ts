import { StaticImageData } from "next/image";

export interface IRoster {
  id: number;
  img: StaticImageData;
  category: string;
  genre: string;
  representation: string;
  spotify? :string;
  socials?: ISocials[]
  title: string;
  description: string
}

interface ISocials {
  instagram?: string;
  twitter?: string;
  youtube?: string; 
  tiktok?: string;
  spotify?: string;
}
