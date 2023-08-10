import React, { FC } from "react";

// css import
import styles from "./styles/CategoryTag.module.css";


// props type
type Props = {
  id: number;
  tagsNumber: number;
}

// dataset
import { tags } from "../../data/List";

// なんの配列を表示するか複数の値を取得して表示

// array type
// type Array = {
//   id: number;
//   iconUrl: string;
//   text: string;
//   imgUrl: string;
// }



const CategoryTag: React.FC<Props> = ({ id, tagsNumber }) => {

  const i: number = tagsNumber;

  // tagの内容をこのコンポーネントの中に配列として保持
  // const ListTags: Array[] = [
  //   {
  //     id: 1,
  //     iconUrl: "/pages/category/react",
  //     text: "React",
  //     imgUrl: "/icons/category/reactnative.svg",
  //   },
  //   {
  //     id: 2,
  //     iconUrl: "/pages/category/nextjs",
  //     text: "Next.js",
  //     imgUrl: "/icons/category/nextjs.svg",
  //   },
  //   {
  //     id: 3,
  //     iconUrl: "",
  //     text: "CSS",
  //     imgUrl: "/icons/category",
  //   },
  // ]

  return (
    <a className={styles.tags} href={tags[i].url}>
      <img className={styles.img} src={tags[i].img} alt="iconImg" />
      {tags[i].text}
    </a>
  )
}

export default CategoryTag;