import React, { FC } from "react";

// css import
import styles from "./styles/CategoryTag.module.css";
import { List } from "@chakra-ui/react";

// props type
type Props = {
  id: number;
  tagsNumber?: number[];
}

// なんの配列を表示するか複数の値を取得して表示

// array type
type Array = {
  id: number;
  iconUrl: string;
  text: string;
  imgUrl: string;
}



const CategoryTag: React.FC<Props> = ({ id, tagsNumber }) => {
  // tagの内容をこのコンポーネントの中に配列として保持
  const ListTags: Array[] = [
    {
      id: 1,
      iconUrl: "/pages/category/react",
      text: "React",
      imgUrl: "/icons/category/reactnative.svg",
    },
    {
      id: 2,
      iconUrl: "/pages/category/nextjs",
      text: "Next.js",
      imgUrl: "",
    },
  ]

  return (
    <a className={styles.tags} href={ListTags[0].iconUrl}>
      <img className={styles.img} src={ListTags[0].imgUrl} alt="iconImg" />
      {ListTags[0].text}
    </a>
  )
}

export default CategoryTag;