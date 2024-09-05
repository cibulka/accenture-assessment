import { PropsWithChildren } from "react";

import styles from "./higlight.module.css";

export function Highlight({ children }: PropsWithChildren) {
  return <strong className={styles.root}>{children}</strong>;
}
