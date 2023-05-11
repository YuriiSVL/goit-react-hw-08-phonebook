import PropTypes from 'prop-types';
import css from 'components/Felter/Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name{' '}
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={onChange}
      />{' '}
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
