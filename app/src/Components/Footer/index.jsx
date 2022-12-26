import logo from "@images/footerLogo.png";
import Image from "next/image";
import { translationVariables } from "@utils";
import { useTranslation } from "next-i18next";
import footerBack from "@images/footerBack.png";
import telegram from "@images/Telegram.svg";
import facebook from "@images/Facebook.svg";
import instagram from "@images/Instagram.svg";

// styles
import s from "./footer.module.scss";
import Link from "next/link";

export const Footer = () => {
  const { t } = useTranslation("common");
  const { address, mail, phone } = translationVariables.footer;
  return (
    <footer
      className={s.footer}
      style={{ backgroundImage: `url(${footerBack.src})` }}
    >
      <div className={s.mainWrapper}>
        <Link href={"/"}>
          <Image
            className={s.footer_logo}
            src={logo}
            alt={"logo"}
            width={240}
            height={160}
          />
        </Link>

        <div className={s.textContent}>
          <p className={s.textParagraph}>
            <span>{t(address.title)}</span>
            <span>{t(address.description)}</span>
          </p>
          <p className={s.textParagraph}>
            <span>{t(phone.title)}</span>
            <Link href={`tel:${t(phone.description)}`}>
              {t(phone.description)}
            </Link>
          </p>
          <p className={s.textParagraph}>
            <span>{t(mail.title)}</span>
            <span>{t(mail.description)}</span>
          </p>
        </div>

        <div className={s.socialIcons}>
          <Link target="_blank" href={"/"}>
            <Image src={telegram} alt={"telegram"} />
          </Link>
          <Link target="_blank" href={"/"}>
            <Image src={instagram} alt={"instagram"} />
          </Link>
          <Link target="_blank" href={"/"}>
            <Image src={facebook} alt={"facebook"} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
