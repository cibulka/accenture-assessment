import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

type useKeyboardProps = {
  prev: string | undefined;
  next: string | undefined;
};

export function useKeyboard({ prev, next }: useKeyboardProps) {
  const { push } = useRouter();

  const handler = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          if (prev) push(prev);
          break;
        case "ArrowRight":
          if (next) push(next);
          break;
      }
    },
    [prev, next, push]
  );

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [handler]);
}
