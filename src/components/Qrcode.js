import React from 'react';
// qrcode 
import QRCode from 'react-qr-code';
// style
import styles from '../styles/qrcode.module.css';
// redux
import { useSelector } from 'react-redux';
// function
import { isGrater } from '../functions/functions';

const Qrcode = () => {
  // reading states from store
  const sizeState = useSelector((state) => state.settingsReducer.sizeState);
  const titleState = useSelector((state) => state.settingsReducer.titleState);
  const valueState = useSelector((state) => state.settingsReducer.valueState);
  const generate = useSelector((state) => state.settingsReducer.generate);
  const bgColorState = useSelector(
    (state) => state.settingsReducer.bgColorState
  );
  const fgColorState = useSelector(
    (state) => state.settingsReducer.fgColorState
  );

  return (
    <main className={styles.container}>
      <article>
        {generate ? (
          <QRCode
          className={styles.QRCode}
          // checking for max number 
            size={isGrater(+sizeState)}
            // setting default values
            bgColor={bgColorState || '#fff'}
            fgColor={fgColorState || '#000'}
            value={valueState}
            title={titleState}
          />
        ) : null}
      </article>
    </main>
  );
};

export default Qrcode;
