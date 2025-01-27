import React, { useState } from 'react';
import { useToastContext } from './toastContext';
import styles from '../styles/toastDemo.module.css';

export default function ToastDemo() {
  const { toasts, toastDispatch } = useToastContext();
  const [toastMsg, setToastMsg] = useState('Hello, World!');
  const [toastPosition, setToastPosition] = useState('bottom-right');
  const toastPositionValues = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  const [toastDuration, setToastDuration] = useState(3000);

  const showToast = () => {
    toastDispatch({
      type: 'added',
      id: toasts.length > 0 ? toasts[toasts.length - 1].id + 1 : 0,
      toastPosition,
      toastMsg,
      duration: toastDuration,
    });
  };

  return (
    <div>
      <div className="demo-category-title">
        Toast
      </div>
      <div className="demo-category">
        <div>
          <button
            type="button"
            onClick={() => showToast()}
          >
            Show toast
          </button>
        </div>
        <div className="toast-option">
          Toast message:
          {' '}
          <input
            type="text"
            value={toastMsg}
            onChange={(e) => setToastMsg(e.target.value)}
          />
        </div>
        <div className="toast-option">
          Toast position
        </div>
        <div className="toast-option-radio">
          {toastPositionValues.map((value, index) => (
            <label
              key={`${`${value}-${index}`}`}
              className={styles.radioLabel}
              htmlFor={`toast-radio-${index}`}
            >
              <input
                type="radio"
                className={styles.radioButton}
                id={`toast-radio-${index}`}
                name="toast-position"
                value={value}
                onChange={(e) => setToastPosition(e.target.value)}
                defaultChecked={index === 3}
              />
              {value}
            </label>
          ))}
        </div>
        <div className="toast-option">
          Toast duration(ms):
          {' '}
          <input
            type="number"
            value={toastDuration}
            onChange={(e) => setToastDuration(+e.target.value)}
            onBlur={(e) => {
              let num = +e.target.value;
              if (num < 500) {
                num = 500;
              }
              setToastDuration(num);
            }}
            min={500}
          />
        </div>
      </div>
    </div>
  );
}
