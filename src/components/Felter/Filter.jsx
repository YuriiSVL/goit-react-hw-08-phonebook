import PropTypes from 'prop-types';
import css from 'components/Felter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/contacts/actions';

const Filter = ({ value, onChange }) => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange1 = e => {
    console.log(filter);
    dispatch(setFilter(e.currentTarget.value));
  };
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
