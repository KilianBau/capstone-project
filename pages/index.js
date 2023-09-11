import Card, { ErrorMessage, StyledDiv, StyledLink } from "@/components/Card";

export default function HomePage({ countries, toggleFavourite }) {
  try {
    if (!countries || countries.length === 0) {
      return (
        <StyledDiv>
          <StyledLink href="/countryForm">+</StyledLink>
        </StyledDiv>
      );
    }
    return (
      <>
        <Card countries={countries} toggleFavourite={toggleFavourite} />
      </>
    );
  } catch (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }
}
