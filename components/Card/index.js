import Link from "next/link";
import styled from "styled-components";
import FavouriteButton from "../FavouriteButton";

export default function Card({ countries, toggleFavourite }) {
  return (
    <>
      <StyledCountries>
        {countries.map((country) => (
          <ImageWrapperSpan key={country.id}>
            <FavouriteButton
              countries={countries}
              onClick={() => toggleFavourite(country.id)}
              color={
                country.isFavourite ? "rgb(191, 46, 80)" : "rgb(109, 112, 110)"
              }
              stroke="grey"
            />
            <StyledDetailLink href={`/Subpages/${country.name}`}>
              <StyledListCountry>{country.name}</StyledListCountry>
            </StyledDetailLink>
          </ImageWrapperSpan>
        ))}
      </StyledCountries>
      <StyledDiv>
        <StyledLink href="/countryForm">+</StyledLink>
      </StyledDiv>
      <Spacer />
    </>
  );
}

export const Spacer = styled.div`
  margin-bottom: 16%;
`;

export const StyledCountries = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  gap: 1rem;
  padding: 0%;
`;

export const StyledListCountry = styled.li`
  font-weight: 700;
`;

export const StyledDetailLink = styled(Link)`
  font-size: 25px;
  margin-top: 0 auto;
  overflow: auto;
  text-decoration: none;
  color: black;
  display: flex;
`;

export const ImageWrapperSpan = styled.span`
  border: 2px solid black;
  width: 90%;
  text-align: left;
  background-color: var(--primary-color);
  border-radius: 6px;
  padding-top: 8%;
  padding-bottom: 8%;
  padding-left: 2%;
  position: relative;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  border: 4px solid black;
  border-radius: 50%;
  padding: 0px 12px 4px 12px;
  color: black;
  font-size: 30px;
`;
