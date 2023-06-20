import { ROLES } from './enum';
const currentUser = {
  username: 'shaggy',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};
const rta = checkAdminRole();
console.log('rta', rta);

export const checkRole = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRole', rta2);
