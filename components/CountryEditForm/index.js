import styled from "styled-components";

export default function CountryEditForm({
  country,
  onSubmitEdit,
  handleInputChangeName,
  onEdit,
  handleInputChangeStartDate,
  handleInputChangeEndDate,
}) {
  return (
    <>
      <form onSubmit={onSubmitEdit}>
        <StyledFieldset>
          <StyledDiv>
            <StyledLabel htmlFor="name">Land: </StyledLabel>
            <StyledInput
              value={country.name}
              maxLength="60"
              name="name"
              id="name"
              type="text"
              required
              onChange={handleInputChangeName}
            />
            <StyledLabel htmlFor="startdate">Startdatum:</StyledLabel>
            <StyledInput
              value={country.startDate}
              name="startdate"
              id="startdate"
              type="date"
              onChange={handleInputChangeStartDate}
            />
            <StyledLabel htmlFor="enddate">Enddatum:</StyledLabel>
            <StyledInput
              value={country.endDate}
              name="enddate"
              id="enddate"
              type="date"
              onChange={handleInputChangeEndDate}
            />
          </StyledDiv>

          <StyledButton
            type="submit"
            onClick={() =>
              onEdit(
                country.id,
                country.name,
                country.startDate,
                country.endDate
              )
            }
          >
            Speichern
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
  border: none;
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
