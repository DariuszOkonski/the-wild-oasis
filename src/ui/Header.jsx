import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: orangered;
  padding: 1.2rem 4.8rem;
  border: 1px solid var(--color-grey-100);
`;

function Header() {
  return <StyledHeader>header</StyledHeader>;
}

export default Header;
