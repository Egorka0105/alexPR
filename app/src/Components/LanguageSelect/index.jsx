import React from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { Button } from "src/Components/Button";

import s from "./languageSelect.module.scss";

export const LanguageSelect = () => {
  const router = useRouter();
  const { locale } = router;

  const handleLocale = (language) => {
    router.push(router.asPath, router.asPath, {
      locale: language,
      scroll: false,
    });
  };

  return (
    <div className={s.language_select}>
      <div className={s.language_select__wrapper}>
        <Button
          className={cn(s.language_button, {
            [s.isActive]: locale === "en",
          })}
          onClick={() => handleLocale("en")}
        >
          EN
        </Button>
        <span>|</span>
        <Button
          className={cn(s.language_button, {
            [s.isActive]: locale === "uk",
          })}
          onClick={() => handleLocale("uk")}
        >
          UK
        </Button>
      </div>
    </div>
  );
};
