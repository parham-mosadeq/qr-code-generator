import React from 'react';
// modal
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// styles
import styles from '../styles/settings.module.css';
//  qr library
import Qrcode from './Qrcode';
// state and dispatch hooks
import { useDispatch, useSelector } from 'react-redux';
//
import { copy, pickColor } from '../redux/colorPicker/actionColor';
// functions
import {
  generate,
  link,
  bgColor,
  fgColor,
  size,
  level,
  title,
} from '../redux/userSettings/actionSettings';

const Settings = () => {
  // ! setting actions and states start
  // * dispatching the actions
  const dispatch = useDispatch();
  // *setting the default value
  const sizeState = useSelector((state) => state.sizeState);
  const bgColorState = useSelector((state) => state.bgColorState);
  const fgColorState = useSelector((state) => state.fgColorState);
  const titleState = useSelector((state) => state.titleState);
  const valueState = useSelector((state) => state.valueState);
  // ! setting actions and states end

  // ! copy actions and states start
  const pickedColor = useSelector((state) => state.colorReducer.pickedColor);
  // ! copy actions and states end
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <input
          className={styles.linkInput}
          type='text'
          placeholder='enter your link'
          value={valueState}
          onChange={(e) => dispatch(link(e))}
        />

        {/* user setting start */}
        <div className={styles.userSettings}>
          {/* bg color start */}
          <div className={styles.mainInputs}>
            <label> background color:</label>
            <input
              className={styles.settingsInput}
              type='text'
              value={bgColorState}
              placeholder={'exg: #000, black'}
              onChange={(e) => dispatch(bgColor(e))}
            />
          </div>
          {/* bg color end */}
          {/* fg color start */}
          <div className={styles.mainInputs}>
            <label> line color:</label>
            <input
              className={styles.settingsInput}
              type='text'
              placeholder={'exg: #000, black'}
              value={fgColorState}
              onChange={(e) => dispatch(fgColor(e))}
            />
          </div>
          {/* fg color end */}

          {/* size of the corners start */}
          <div className={styles.mainInputs}>
            <label> size:</label>
            <input
              className={styles.settingsInput}
              value={sizeState}
              onChange={(e) => dispatch(size(e))}
              type='number'
              max={350}
              min={50}
              placeholder='enter size'
            />
          </div>
          {/* size of the corners end */}

          {/* level start */}
          <div className={styles.mainInputs}>
            <label> level:</label>
            <select
              className={styles.settingsInput}
              onChange={(e) => dispatch(level(e))}
            >
              <option value='level' hidden defaultValue>
                level
              </option>
              <option className={styles.opt} value='L'>
                L
              </option>
              <option className={styles.opt} value='M'>
                M
              </option>
              <option className={styles.opt} value='Q'>
                Q
              </option>
              <option className={styles.opt} value='H'>
                H
              </option>
            </select>
          </div>
          {/* level end */}
          {/* title start */}
          <div className={styles.mainInputs}>
            <label>title:</label>
            <input
              className={styles.settingsInput}
              value={titleState}
              onChange={(e) => dispatch(title(e))}
              type='text'
              placeholder='enter title'
            />
          </div>
          {/* title end */}
        </div>
        {/* user setting end */}
      </article>

      <div>
        <div>
          <label> pick a color here!</label>
          <input
            className={(styles.settingsInput, styles.colorPicker)}
            value={pickedColor}
            onChange={(e) => dispatch(pickColor(e))}
            type='color'
          />
        </div>
        <div>
          <button className={styles.btn} onClick={() => dispatch(copy())}>
            copy!
          </button>
        </div>
      </div>

      <button
        className={styles.btn}
        onClick={() => {
          dispatch(generate());
        }}
      >
        generate
      </button>
      <article>
        <Qrcode />
      </article>
      <ToastContainer />
    </main>
  );
};

export default Settings;
