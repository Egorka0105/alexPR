import banner from "@images/fon2.png";
//styles
import s from "./main.module.scss";

export const Main = () => {
  console.log("ssss");
  return (
    <main className={s.main} style={{ backgroundImage: `url(${banner.src})` }}>
      <div className={s.mainWrapper}>
        <div className={s.titleWrapper}>
          <h1>XАИША-М</h1>
          <h2>Site under development...</h2>
        </div>
      </div>
    </main>
  );
};
