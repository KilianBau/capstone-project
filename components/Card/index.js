import { countries } from "@/lib/db";
import { styled } from "styled-components";

export default function Card() {
  return (
    <>
      <StyledCountries>
        {countries.map((country) => (
          <StyledCountry key={country.id}>{country.name}</StyledCountry>
        ))}
      </StyledCountries>
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
  background-color: turquoise;
  border-radius: 6px;
  padding-top: 8%;
  padding-bottom: 8%;
  padding-left: 2%;
  font-size: x-large;
  margin-top: 0 auto;
`;
