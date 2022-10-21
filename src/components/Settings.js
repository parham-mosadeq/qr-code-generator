import React from 'react';
// modal
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// styles
// import styles from '../styles/showMsg.module.css';
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
    <main>
      <article>
        <input
          type='text'
          placeholder='enter your link'
          value={valueState}
          onChange={(e) => dispatch(link(e))}
        />

        {/* user setting start */}
        <div>
          {/* bg color start */}
          <div>
            <label> background color:</label>
            <input
              type='text'
              value={bgColorState}
              onChange={(e) => dispatch(bgColor(e))}
            />
          </div>
          {/* bg color end */}
          {/* fg color start */}
          <div>
            <label> line color:</label>
            <input
              type='text'
              value={fgColorState}
              onChange={(e) => dispatch(fgColor(e))}
            />
          </div>
          {/* fg color end */}

          {/* size of the corners start */}
          <div>
            <label> size:</label>
            <input
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
          <div>
            <label> level:</label>
            <select onChange={(e) => dispatch(level(e))}>
              <option value='level' hidden defaultValue>
                level
              </option>
              <option value='L'>L</option>
              <option value='M'>M</option>
              <option value='Q'>Q</option>
              <option value='H'>H</option>
            </select>
          </div>
          {/* level end */}
          {/* title start */}
          <div>
            <label>title</label>
            <input
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
          <label htmlFor=''>you can pick a color here!</label>
          <input
            value={pickedColor}
            onChange={(e) => dispatch(pickColor(e))}
            type='color'
          />
        </div>
        <div>
          <button onClick={() => dispatch(copy())}>copy!</button>
        </div>
      </div>

      <button
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
