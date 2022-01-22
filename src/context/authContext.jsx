import {
  createContext,
  createRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

import Login from "../components/page/login";

const AuthContext = createContext({});
const contextRef = createRef();

export function AuthProvider({ authService, authErrorEventBus, children}) {
  const [user, setUser] = useState(undefined);

  useImperativeHandle(contextRef, () => (user ? user.token : undefined));

  useEffect(() => {
    authErrorEventBus.listen((err) => {
      console.log(err);
      setUser(undefined);
    });
  }, [authErrorEventBus]);

  useEffect(() => {
    authService.me().then(setUser).catch(console.error);
  }, [authService]);

  const signUp = useCallback(
    async (username, password, name, email) =>
      authService
        .signUp(username, password, name, email)
        .then((user) => setUser(user)),
    [authService]
  );

  const login = useCallback(
    async (username, password) =>
      authService.login(username, password).then((user) => setUser(user)),
    [authService]
  );

  const logout = useCallback(
    async () => authService.logout().then(() => setUser(undefined)),
    [authService]
  );

  const context = useMemo(
    () => ({
      user,
      signUp,
      login,
      logout,
    }),
    [user, signUp, login, logout]
  );

  return (
    <AuthContext.Provider value={context}>
      {user ? (
        children
      ) : (
        <div className='app'>
          <Login onSignUp={signUp} onLogIn={login} />
        </div>
      )}
    </AuthContext.Provider>
  );
}

export class AuthErrorEventBus {
  listen(callback) {
    this.callback = callback;
  }
  notifiy(error) {
    this.callback(error);
  }
}

export default AuthContext;
// export const fetchToken = () => contextRef.current;
export const useAuth = () => useContext(AuthContext);