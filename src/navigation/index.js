import AdminNavigator from './AdminNavigator.js';
import UserNavigator from './UserNavigator.js';

const RootNavigation = () => {
  return false ? <AdminNavigator /> : <UserNavigator />;
};

export default RootNavigation;
