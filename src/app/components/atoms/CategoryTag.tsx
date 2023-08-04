import React, { FC } from "react";

// css import
import styles from "./styles/CategoryTag.module.css";

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
  // このURLはタグの集積場所につながるパスを後々指定
  url: string;
}



const Tags: React.FC<Props> = ({ id, tagsNumber }) => {
  // tagの内容をこのコンポーネントの中に配列として保持
  const ListTags: Array[] = [
    {
      id: 1,
      iconUrl: "",
      text: "React",
      url: "",
    },
    {
      id: 2,
      iconUrl: "",
      text: "Next.js",
      url: "",
    },
  ]

  return (
    <div className={styles.tags}>
      tags
    </div>
  )
}

export default Tags;