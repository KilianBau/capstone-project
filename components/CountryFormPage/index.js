import styled from "styled-components";
import { uid } from "uid";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export default function CountryForm({ submitNewCountry }) {
  const [imagesData, setImagesData] = useState([]);
  const [isButtonActive, setIsButtonActive] = useState(false);
  function getData(data) {
    setImagesData([...imagesData, data]);
    setIsButtonActive(true);
  }

  function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const country = Object.fromEntries(formData);

    const newCountry = {
      id: uid(),
      name: country.name,
      startDate: country.startdate,
      endDate: country.enddate,
      imagesUrls: imagesData.map((data) => data.info.path),
      publicIds: imagesData.map((data) => data.info.public_id),
    };
    console.log(newCountry);
    submitNewCountry(newCountry);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <StyledFieldset>
          <StyledDiv>
            <StyledLabel htmlFor="name">Land hinzufügen: </StyledLabel>
            <StyledInput
              maxLength="60"
              name="name"
              id="name"
              type="text"
              placeholder="Österreich, Australien..."
              required
            />
            <StyledLabel htmlFor="startdate">Startdatum:</StyledLabel>
            <StyledInput name="startdate" id="startdate" type="date" />
            <StyledLabel htmlFor="enddate">Enddatum:</StyledLabel>
            <StyledInput name="enddate" id="enddate" type="date" />
          </StyledDiv>
          <StyledLabel htmlFor="uploadimg">Upload:</StyledLabel>
          <CldUploadButton
            name="uploadimg"
            id="uploadimg"
            onUpload={getData}
            uploadPreset="v3xj87i3"
            required
          />
          <StyledButton type="submit" disabled={!isButtonActive}>
            Hinzufügen
          </StyledButton>
        </StyledFieldset>
      </form>
    </>
  );
}

const StyledFieldset = styled.fieldset`
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 4px 4px 4px;
`;

const StyledLabel = styled.label`
  margin-top: 10%;
  padding-right: 6%;
`;

const StyledInput = styled.input`
  margin-top: auto;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  align-self: center;
  padding: 4px 24px 4px 24px;
  border-radius: 4px;
  background-color: #309c27;
  border: none;
  font-size: 18px;
  margin-top: 1.5rem;
  &:hover {
    background-color: #28cc1b;
  }
`;
