import logo from "@images/bbbb.png";
import Image from "next/image";
// styles
import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.mainWrapper}>
        <div>
          <Image
            className={s.footer_logo}
            src={logo}
            alt={"logo"}
            width={80}
            height={80}
          />
        </div>

        <div></div>
      </div>
    </footer>
  );
};
