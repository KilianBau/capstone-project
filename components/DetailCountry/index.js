import moment from "moment";
import "moment/locale/de";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { StyledDiv } from "../Card";
import { useRouter } from "next/router";

export default function DetailCountry({
  currentCountry,
  onClickDelete,
  showButton,
  getImages,
  addNewImgDialog,
  addImage,
  closeButton,
  isSaved,
}) {
  const router = useRouter();
  const cloudinaryImageLoader = ({ src }) => {
    return `https://res.cloudinary.com/dn8ymrr2t/image/upload/${src}`;
  };
  const { name, startDate, endDate, id, imagesUrls, publicIds } =
    currentCountry;

  const startDatum = moment(startDate).format("ll");
  const endDatum = moment(endDate).format("ll");
  return (
    <>
      <StyledButtonDiv>
        <StyledBackButton
          aria-label="zurück Button"
          onClick={() => {
            router.back();
          }}
        >
          {" "}
          <svg
            height={20}
            width={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </StyledBackButton>

        <CenterDiv>
          <AddButton onClick={addNewImgDialog} aria-label="hinzufügen Button">
            +
          </AddButton>
        </CenterDiv>
        <dialog id="newImageDialog">
          <p>Bilder hinzufügen: </p>
          <form method="dialog" onSubmit={addImage}>
            <StyledButtonDiv>
              <CldUploadButton
                name="addimg"
                id="addimg"
                uploadPreset="v3xj87i3"
                onUpload={getImages}
                onClose={addNewImgDialog}
                onClick={closeButton}
                required
                aria-label="Bilder hochladen"
              />
              <button
                type="submit"
                disabled={!isSaved}
                onClick={closeButton}
                aria-label="speichern Button"
              >
                Speichern
              </button>

              <button
                type="button"
                onClick={closeButton}
                aria-label="abbrechen Button"
              >
                Abbrechen
              </button>
            </StyledButtonDiv>
          </form>
        </dialog>
        <StyledDeleteButton onClick={showButton} aria-label="Gallerie löschen">
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
        <p>Möchtest du dieses Land löschen?</p>
        <form method="dialog">
          <StyledButtonDiv>
            <button aria-label="abbrechen">abbrechen</button>
            <Link href={"/"}>
              <StyledButton
                onClick={() => onClickDelete(id, publicIds)}
                aria-label="löschen"
              >
                löschen
              </StyledButton>
            </Link>
          </StyledButtonDiv>
        </form>
      </dialog>
      <StyledCountryUl>
        <StyledCountry>
          <Link href={`/EditSubpage/${id}`}>
            <StyledEditButton aria-label="Land bearbeiten">
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
              </svg>
            </StyledEditButton>
          </Link>
          <StyledCountryName>{name}</StyledCountryName>
          <StyledDivCard>
            <StyledDateHeader>Reisezeitraum:</StyledDateHeader>
            <StyledDate>
              {startDatum} bis {endDatum}
            </StyledDate>
          </StyledDivCard>
        </StyledCountry>
      </StyledCountryUl>

      <StyledImageListUl>
        {imagesUrls.map((imageUrl) => (
          <StyledImageLi key={imageUrl}>
            <Link
              href={`/${publicIds[imagesUrls.indexOf(imageUrl)]}`}
              aria-label="Großansicht des Bildes"
            >
              <Image
                src={`${imageUrl}`}
                height={250}
                width={250}
                quality={100}
                priority
                alt={`new added picture with Url:${imageUrl}`}
                loader={cloudinaryImageLoader}
                style={{ objectFit: "contain" }}
                onError={(e) =>
                  alert("Es kam zu einem Fehler beim laden des Bildes")
                }
                loading="eager"
              />
            </Link>
          </StyledImageLi>
        ))}
      </StyledImageListUl>

      <StyledDiv></StyledDiv>
    </>
  );
}

const StyledCountryUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  width: 100%;
  padding: 0;
`;

const StyledImageListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 0;
  list-style: none;
`;

const StyledImageLi = styled.li`
  margin: 0 auto;
`;

const StyledDivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0;
`;

const StyledCountryName = styled.h3`
  text-align: center;
  margin-top: 0;
  margin-bottom: 5%;
`;

const StyledDateHeader = styled.h4`
  margin: 0 auto;
  font-weight: 600;
  font-size: medium;
`;

const StyledDate = styled.h5`
  margin: 0 auto;
  font-weight: 400;
  font-size: small;
`;

const StyledCountry = styled.li`
  width: 100%;
  background-color: var(--primary-color);
  border-radius: 6px;
  padding-top: 8%;
  padding-bottom: 8%;
  padding-left: 2%;
  font-size: 25px;
  margin-top: 0 auto;
  overflow: auto;
  position: relative;
`;

export const StyledDeleteButton = styled.button`
  border: none;
  background-color: var(--primary-color);
  border-radius: 8px;
  z-index: 10;
  &:hover {
    background-color: transparent;
  }
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2%;
  margin-right: 2%;
`;

const StyledBackButton = styled.button`
  border: none;
  background-color: var(--primary-color);
  border-radius: 8px;
  &:hover {
    background-color: transparent;
  }
`;

const StyledEditButton = styled.button`
  position: absolute;
  top: 0rem;
  right: 0;
  border: none;
  background-color: var(--primary-color);
  border-radius: 8px;
  &:hover {
    background-color: transparent;
  }
  border-radius: 50%;
`;

const StyledButton = styled.button`
  &:hover {
    background-color: transparent;
  }
`;

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
  border: 1px solid black;
  border-radius: 50%;
  color: black;
  padding: 2px 8px 2px 8px;
  font-weight: 700;
  border: none;
  background-color: var(--primary-color);
  border-radius: 8px;
  &:hover {
    background-color: transparent;
  }
`;
