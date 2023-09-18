import Link from "next/link";
import styled from "styled-components";
import FavouriteButton from "../FavouriteButton";

export default function Card({ countries, toggleFavourite }) {
  return (
    <>
      <StyledDiv>
        <StyledLink href="/countryForm" aria-label="Land hinzufügen">
          +
        </StyledLink>
      </StyledDiv>
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
            <StyledDetailLink
              href={`/Subpages/${country.name}`}
              aria-label="Bilder Galerie"
            >
              <StyledListCountry>{country.name}</StyledListCountry>
            </StyledDetailLink>
          </ImageWrapperSpan>
        ))}
      </StyledCountries>

      <Spacer />
    </>
  );
}

export const Spacer = styled.div`
  margin-bottom: 16%;
`;

export const StyledCountries = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;
  gap: 1rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  padding: 0;
`;

export const StyledListCountry = styled.li`
  font-weight: 700;
  color: black;
`;

export const StyledDetailLink = styled(Link)`
  font-size: 25px;
  margin-top: 0;
  overflow: auto;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
`;

export const ImageWrapperSpan = styled.span`
  flex: 1;
  text-align: left;
  background-color: var(--primary-color);
  border: 1px solid black;
  border-radius: 6px;
  padding: 1% 2%;
  position: relative;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  padding: 2px 10px 2px 10px;
  color: var(--primary-color);
  font-size: 30px;
`;

export const ErrorMessage = styled.div`
  font-size: 18px;
  color: red;
  text-align: center;
  margin-top: 20px;
`;
