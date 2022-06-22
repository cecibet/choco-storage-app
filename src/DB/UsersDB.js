const UsersDB = () => 
{
    const users = [
    {
      username: "vendedor",
      password: "vendedorpass",
      superAdmin: false
    },
    {
      username: "supervisor",
      password: "supervisorpass",
      superAdmin: true
    }
  ]
  return users;
};

export default UsersDB;