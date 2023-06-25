import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <label className={css.filter__label}>
      Find contacts by name{' '}
      <input
        className={css.filterInput}
        type="text"
        value={filter}
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
