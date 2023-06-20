enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

type User = {
  userName: string;
  role: ROLES;
}
const shaggyUser: User = {
  userName: 'Robert',
  role: ROLES.ADMIN,
}
