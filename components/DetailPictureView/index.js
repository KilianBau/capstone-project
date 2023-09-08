import Image from "next/image";
import styled from "styled-components";
import BackButton from "../BackButton";
import { StyledButtonDiv, StyledDeleteButton } from "../DetailCountry";

export default function DetailPictureView({
  currentPicture,
  handleDeletePicture,
  showImageDelete,
}) {
  const cloudinaryImageLoader = ({ src }) => {
    return `https://res.cloudinary.com/dn8ymrr2t/image/upload/${src}`;
  };
  return (
    <>
      <StyledButtonDiv>
        <BackButton />
        <StyledDeleteButton onClick={showImageDelete} aria-label="Bild löschen">
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
      <dialog id="deleteImageDialog">
        <p>Bist du dir sicher dieses Bild zu löschen?</p>
        <form method="dialog">
          <StyledButtonDiv>
            <button aria-label="abbrechen">abbrechen</button>

            <button onClick={handleDeletePicture} aria-label="löschen">
              löschen
            </button>
          </StyledButtonDiv>
        </form>
      </dialog>
      <CenterDiv>
        <StyledImage
          src={`${currentPicture}`}
          width={1000}
          height={1000}
          quality={100}
          priority
          alt={`new added picture with path:${currentPicture}`}
          loader={cloudinaryImageLoader}
          layout="responsive"
        />
      </CenterDiv>
    </>
  );
}

const StyledImage = styled(Image)`
  max-width: 375px;
  max-height: 450px;
  margin: 0.5rem auto;
`;

const CenterDiv = styled.div`
  display: flex;
`;
