import {
  ImageWrapperSpan,
  Spacer,
  StyledCountries,
  StyledDetailLink,
  StyledListCountry,
} from "../Card";
import FavouriteButton from "../FavouriteButton";

export default function FavouritePage({ countries, toggleFavourite }) {
  const favouriteCountries = countries.filter(
    (country) => country.isFavourite === true
  );

  return (
    <>
      <StyledCountries>
        {favouriteCountries.map((country) => (
          <ImageWrapperSpan key={country.id}>
            <FavouriteButton
              onClick={() => toggleFavourite(country.id)}
              color={country.isFavourite ? "rgb(191, 46, 80)" : "black"}
            />
            <StyledDetailLink href={`/Subpages/${country.name}`}>
              <StyledListCountry>{country.name}</StyledListCountry>
            </StyledDetailLink>
          </ImageWrapperSpan>
        ))}
      </StyledCountries>
      <Spacer />
    </>
  );
}
