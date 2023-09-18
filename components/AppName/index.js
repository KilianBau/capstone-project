import styled from "styled-components";

export default function AppName() {
  return <StyledAppName>TripPic</StyledAppName>;
}

const StyledAppName = styled.h1`
  text-align: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 0;
  background-color: var(--primary-color);
`;
