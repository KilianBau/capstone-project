import { useRouter } from "next/router";
import { styled } from "styled-components";
import { StyledCountries } from "../Card";
export default function DetailCountry({ countries }) {
  const router = useRouter();
  const currentPage = router.query.detailCountry;

  if (!currentPage) {
    return null;
  }

  const currentCountry = countries.find(
    (country) => country.name === currentPage
  );

  const { name, startDate, endDate } = currentCountry;

  return (
    <>
      <StyledCountries>
        <StyledCountry>
          <StyledCountryName>{name}</StyledCountryName>
          <StyledDiv>
            <StyledDateHeader>Reisezeitraum:</StyledDateHeader>
            <StyledDate>{`${startDate} bis ${endDate}`}</StyledDate>
          </StyledDiv>
        </StyledCountry>
      </StyledCountries>
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0;
`;

const StyledCountryName = styled.h3`
  text-align: center;
  margin-top: 0;
`;

const StyledDateHeader = styled.h4`
  margin: 0 auto;
  font-weight: 600;
`;

const StyledDate = styled.h5`
  margin: 0 auto;
  font-weight: 400;
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
  font-size: 25px;
  margin-top: 0 auto;
  overflow: auto;
`;
