import Image from "next/image";
import logo from "@images/bbbb.png";

// styles
import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.mainWrapper}>
        <Image src={logo} alt={"logo"} width={80} height={80} />
      </div>
    </header>
  );
};
