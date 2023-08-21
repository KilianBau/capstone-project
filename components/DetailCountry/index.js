import { useRouter } from "next/router";
import { styled } from "styled-components";
import { StyledCountries } from "../Card";
import Link from "next/link";
import BackButton from "../BackButton";

export default function DetailCountry({ countries, deleteCountry }) {
  const router = useRouter();
  const currentPage = router.query.detailCountry;

  if (!currentPage) {
    return null;
  }

  const currentCountry = countries.find(
    (country) => country.name === currentPage
  );

  function onClickDelete(id) {
    const countriesWithoutSelectedCountry = countries.filter((country) => {
      if (country.id === id) {
        return false;
      } else {
        return true;
      }
    });

    deleteCountry(countriesWithoutSelectedCountry);
  }

  function showButton() {
    deleteDialog.showModal();
  }

  if (currentCountry === undefined) {
    return null;
  }
  const { name, startDate, endDate, id } = currentCountry;

  return (
    <>
      <StyledButtonDiv>
        <BackButton />
        <StyledDeleteButton onClick={showButton}>
          <svg
            width={20}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </StyledDeleteButton>
      </StyledButtonDiv>
      <dialog id="deleteDialog">
        <p>Are you sure to delte this country?</p>
        <form method="dialog">
          <StyledButtonDiv>
            <button>cancel</button>
            <Link href={"/"}>
              <button onClick={() => onClickDelete(id)}>delete</button>
            </Link>
          </StyledButtonDiv>
        </form>
      </dialog>
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

const StyledDeleteButton = styled.button`
  &:hover {
    background-color: transparent;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
