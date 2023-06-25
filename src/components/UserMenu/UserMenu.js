import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.container}>
      <p className={css.userName}>{user.name}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
