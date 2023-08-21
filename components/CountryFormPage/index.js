import styled from "styled-components";

import { uid } from "uid";

export default function CountryForm({ submitNewCountry }) {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const country = Object.fromEntries(formData);
    const newCountry = {
      id: uid(),
      name: country.name,
      startDate: country.startdate,
      endDate: country.enddate,
    };
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
          <StyledButton type="submit">Hinzufügen</StyledButton>
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
  height: 50vh;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 4px 4px 4px;
`;

const StyledLabel = styled.label`
  margin-top: 15%;
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
  &:hover {
    background-color: #28cc1b;
  }
`;
