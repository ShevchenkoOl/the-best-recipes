import NavItem from "./navItem";


const NavList = () => {
  return (
    <nav>
      <ul>
        <NavItem to="/categories">Categories</NavItem>
        <NavItem to="/addRecipes">Add recipes</NavItem>
        <NavItem to="/myRecipes">My recipes</NavItem>
        <NavItem to="/favorites">Favorites</NavItem>
        <NavItem to="/shopping">Shopping list</NavItem>
      </ul>
    </nav>
  );
};

export default NavList;
