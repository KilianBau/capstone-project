import styled from "styled-components";

export default function AppName() {
  return <StyledAppName>TripPic</StyledAppName>;
}

const StyledAppName = styled.h1`
  text-align: center;
  border: 3px solid black;
  border-radius: 50%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 15px;
  background-color: var(--secondary-color);
`;
