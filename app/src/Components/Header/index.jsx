import Image from "next/image";
import headerBack from "@images/headerBack.jpg";
import logo from "@images/logo.png";
import Link from "next/link";
import { LanguageSelect } from "@components/LanguageSelect";
import { useTranslation } from "next-i18next";
import { translationVariables } from "@utils";

// styles
import s from "./header.module.scss";

export const Header = () => {
  const { t } = useTranslation("common");
  const { firstPart, secondPart } = translationVariables.header;

  return (
    <header
      style={{ backgroundImage: `url(${headerBack.src})` }}
      className={s.header}
    >
      <div className={s.mainWrapper}>
        <h3>{t(firstPart)}</h3>
        <Link href={"/"}>
          <Image src={logo} alt={"logo"} />
        </Link>

        <h3>{t(secondPart)}</h3>
      </div>
      <LanguageSelect />
    </header>
  );
};
