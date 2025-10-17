'use client';
import Cookies from 'js-cookie';

const cookieStorage = {
  getItem: (name) => {
    const value = Cookies.get(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: (name, value) => {
    Cookies.set(name, JSON.stringify(value), { expires: 1 });
  },
  removeItem: (name) => Cookies.remove(name),
};

export default cookieStorage;
