import React from "react";
import Link from "next/link";

// scss import
import styles from "./styles/BoxButton.module.scss";

// type
export type BoxButtonProps = {
    id: number;
    text: string;
    size?: "small" | "medium" | "large";
    color?: "blue" | "white" | "black";
    link: string;
};

const BoxButton = ({
    id,
    text,
    size = "medium",
    color = "blue",
    link = "/"
    }: BoxButtonProps) => {
    return (
        <Link
        className={`${styles.boxButton} ${styles[size]} ${styles[color]}`}
        href={link}
        key={id}
        >
        {text}
        </Link>
    );
};

export default BoxButton;