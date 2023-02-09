import React from "react";

// the hook
import { useTranslation } from "react-i18next";

function Translation() {
  const { i18n } = useTranslation();

  return (
    <>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
      <button onClick={() => i18n.changeLanguage("fr")}>fr</button>
    </>
  );
}

export default Translation;
