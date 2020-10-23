import { useEffect } from 'react';

export function useScrollToTop(dependencyList) {
  dependencyList = Array.isArray(dependencyList) ? dependencyList : [];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);

}

export const user = {
  "frankchoongsaeng@gmail.com": "11223344",
  loggedIn: false,
  setLoggedIn(status) {
    this.loggedIn = status
  },
  login(email, pass) {
    if(this[email] === pass){
      this.setLoggedIn(true);
      return true;
    }
    return false;
  },
  logout() {
    console.log(this);
    this.setLoggedIn(false);
  }
}

