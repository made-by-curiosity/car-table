import PropTypes from 'prop-types';
import { MainSection, PageTitle } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <MainSection>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </MainSection>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
