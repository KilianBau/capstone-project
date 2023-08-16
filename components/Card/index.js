import Link from "next/link";
import styled from "styled-components";

export default function Card({ isCountry }) {
  return (
    <>
      <StyledCountries>
        {isCountry.map((country) => (
          <StyledCountry key={country.id}>{country.name}</StyledCountry>
        ))}
      </StyledCountries>
      <StyledDiv>
        <StyledLink href="/formCountry">+</StyledLink>
      </StyledDiv>
    </>
  );
}

const StyledCountries = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  gap: 1rem;
  padding: 0%;
`;

const StyledCountry = styled.li`
  border: 2px solid black;
  width: 90%;
  text-align: left;
  background-color: var(--primary-color);
  border-radius: 6px;
  padding-top: 8%;
  padding-bottom: 8%;
  padding-left: 2%;
  font-size: x-large;
  margin-top: 0 auto;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: 4px solid black;
  border-radius: 50%;
  padding: 0px 12px 4px 12px;
  color: black;
  font-size: xx-large;
`;
