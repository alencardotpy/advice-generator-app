import styles from "@/styles/Container.module.css";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import picMobileDivider from "../../public/pattern-divider-mobile.svg";
import picDesktopDivider from "../../public/pattern-divider-mobile.svg";
import picDice from "../../public/icon-dice.svg";

const apiEndpoint = "/api/advices";

export default function AdiceComponent() {
  const [itemAdvice, setItemAdvice] = useState({});
  const [click, setClick] = useState(0);
  const [buttonState, setButtonState] = useState(true);

  useEffect(() => {
    if (click !== 0 && itemAdvice != null) {
      setItemAdvice({});
      setButtonState(false);
      axios
        .get(apiEndpoint)
        .then((response) => {
          setItemAdvice(response.data);
          setButtonState(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [click]);

  return (
    <div className={styles.container}>
      {click >= 1 ? (
        itemAdvice.id ? (
          <AdviceTitle titleId={itemAdvice.id} />
        ) : (
          <Loading />
        )
      ) : (
        <ClickStart />
      )}

      {click >= 1 ? (
        itemAdvice.advice ? (
          <Advice data={itemAdvice.advice} />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <Devider loadinState={itemAdvice.id} />

      <button
        className={buttonState !== false ? styles.button : styles.buttonLoading}
        onClick={() => {
          if (click == 2 && itemAdvice !== null) {
            setClick(1);
          } else {
            setClick(2);
          }
        }}
      >
        <Image className={styles.diceIcon} src={picDice} />
      </button>
    </div>
  );
}

const AdviceTitle = (props) => {
  return <h1 className={styles.title}>Advice #{props.titleId}</h1>;
};

const Advice = (props) => {
  return (
    <>
      <p className={styles.adviceText}>"{props.data}"</p>
    </>
  );
};

const Loading = (props) => {
  return <h1 className={styles.loading}>Loading...{!props.stateLoad}</h1>;
};
const ClickStart = () => {
  return (
    <>
      <h1 className={styles.clickToStart}>Click on the dice to start</h1>
    </>
  );
};

const Devider = (props) => {
  return (
    <>
      {!props.loadinState == "" ? (
        <>
          <Image
            className={styles.mobileDivider}
            src={picMobileDivider}
          ></Image>
          <Image
            className={styles.desktopDivider}
            src={picDesktopDivider}
          ></Image>
        </>
      ) : (
        ""
      )}
    </>
  );
};
