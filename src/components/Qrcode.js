import QRCode from 'react-qr-code';

import React from 'react';
import { useSelector } from 'react-redux';

const Qrcode = () => {
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
    <div>
      <div>
        {generate ? (
          <QRCode
            size={+sizeState}
            bgColor={bgColorState || '#fff'}
            fgColor={fgColorState || '#000'}
            // style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={valueState}
            title={titleState}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Qrcode;
