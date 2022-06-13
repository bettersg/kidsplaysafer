import { useState, useEffect, useCallback } from "react";

export const useKeyboardShortcuts = (
  onPrevious,
  onNext,
  isNextEnabled,
  customHandler
) => {
  const [canPressNext, setCanPressNext] = useState(isNextEnabled);
  const handleKeyDown = useCallback(
    (e) => {
      if (!!onPrevious && e?.keyCode === 8) {
        e.preventDefault();
        onPrevious();
      } else if (!!onNext && canPressNext && e?.keyCode === 13) {
        e.preventDefault();
        onNext();
      } else if (!!customHandler) {
        // We do not prevent default here, the custom handler needs to manage as needed
        customHandler(e);
      }
    },
    [canPressNext, onPrevious, onNext, customHandler]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return [setCanPressNext];
};
