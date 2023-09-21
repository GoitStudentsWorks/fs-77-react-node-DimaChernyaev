import { NavigationList, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationList>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/drinks">Drinks</StyledLink>
      <StyledLink to="/add">Add Drink</StyledLink>
      <StyledLink to="/my">My Drinks</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>

      <StyledLink to="/welcome">Welcome</StyledLink>
      <StyledLink to="/signup">Sign Up</StyledLink>
      <StyledLink to="/signin">Sign In</StyledLink>
    </NavigationList>
  );
};

export default Navigation;
