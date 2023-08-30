import BackButton from "../BackButton";
import Image from "next/image";
import styled from "styled-components";
import { StyledButtonDiv, StyledDeleteButton } from "../DetailCountry";
import Link from "next/link";

export default function DetailPictureView({
  currentPicture,
  handleDeletePicture,
  showImageDelete,
}) {
  return (
    <>
      <StyledButtonDiv>
        <BackButton />
        <StyledDeleteButton onClick={showImageDelete}>
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
        <p>Are you sure to delete this picture?</p>
        <form method="dialog">
          <StyledButtonDiv>
            <button>cancel</button>

            <button onClick={handleDeletePicture}>delete</button>
          </StyledButtonDiv>
        </form>
      </dialog>

      <CenteredImageContainer>
        <StyledImage
          src={`https://res.cloudinary.com/dn8ymrr2t/image/upload/${currentPicture}`}
          height={365}
          width={365}
          alt={`new added picture with path:${currentPicture}`}
        />
      </CenteredImageContainer>
    </>
  );
}

const CenteredImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`;

const StyledImage = styled(Image)`
  border: 2px solid black;
  border-radius: 2%;
`;
