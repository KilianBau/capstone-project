import styled from "styled-components";

export default function AppName() {
  return <StyledAppName>TripPic</StyledAppName>;
}

const StyledAppName = styled.h1`
  text-align: center;

  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 15px;
  background-color: var(--primary-color);
`;
