import { FormLabelText } from 'components/Components.styled';
function Filter({ value, onChange }) {
  return (
    <label>
      <FormLabelText>Find contacts by name</FormLabelText>

      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}

export default Filter;
