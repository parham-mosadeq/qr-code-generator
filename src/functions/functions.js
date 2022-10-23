import { toast } from 'react-toastify';

const notify = (txt, type) => {
  if (type === 'success') {
    toast.success(txt, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  } else {
    toast.warning(txt, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }
};

const isGrater = (num) => {
  const maxNum = 250;

  if (num > maxNum) {
    return (num = maxNum);
  }

  return num;
};

export { notify, isGrater };
