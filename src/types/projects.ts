import { StaticImageData } from "next/image";

export interface IProjects {
  id: number;
  img: StaticImageData;
  category: string;
  title: string;
  show: string;
}
