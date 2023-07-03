import PropTypes from 'prop-types';
import { FilterWrap } from './TopActionsSection.styled';

export const TopActionsSection = ({ children }) => {
  return <FilterWrap>{children}</FilterWrap>;
};

TopActionsSection.propTypes = {
  children: PropTypes.node.isRequired,
};
