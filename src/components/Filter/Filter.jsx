import { PropTypes } from 'prop-types';
import { Input } from '../ContactForm/ContactForm.styled';
const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <br />
    <Input type="text" value={value} onChange={onChange} />
  </label>
);
export default Filter;

Filter.prototype = {
  value: PropTypes.string,
  onChengeFilter: PropTypes.func,
};
