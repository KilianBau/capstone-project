import BackButton from "../BackButton";
import Image from "next/image";
import styled from "styled-components";

export default function DetailPictureView({ currentPicture }) {
  return (
    <>
      <BackButton />
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
