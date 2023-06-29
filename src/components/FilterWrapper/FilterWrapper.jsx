import PropTypes from 'prop-types';
import { FilterWrap } from './FilterWrapper.styled';

export const FilterWrapper = ({ children }) => {
  return <FilterWrap>{children}</FilterWrap>;
};

FilterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
