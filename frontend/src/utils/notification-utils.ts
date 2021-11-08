import { Notify } from 'quasar';

const showError = (message: string) => {
  Notify.create({
    message: message,
    color: 'red',
    position: 'top-right',
    icon: 'error',
    timeout: 5000,
  });
};

export { showError };
