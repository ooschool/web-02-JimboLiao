import { styled } from "styled-components";
const SelectModal = ({
  name,
  id,
  optionText = "--- Select an option ---",
  options,
  onChange,
}) => {
  return (
    <select name={name} id={id} onChange={onChange}>
      <option value="">{optionText}</option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

const StyledSelect = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

const FormSelect = (props) => {
  return (
    <StyledSelect>
      <SelectModal
        name={props.name}
        id={props.id}
        optionText={props.optionText}
        options={props.options}
        onChange={props.onChange}
      />
    </StyledSelect>
  );
};

export { FormSelect };
