import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <div>
      <h1>
        <i className={icon} />
        &nbsp; {title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Application Name',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
