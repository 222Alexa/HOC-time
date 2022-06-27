import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import 'moment/locale/ru';


const witchDateTimePretty = (Component) => {
  const HOCComponent = (props) => {
    const { dateTime } = props;

    const transformPrettyTime = moment(dateTime).fromNow();

    return <Component {...props} dateTime={transformPrettyTime} />;
  };
  HOCComponent.displayName = "transformDatetimeHOC";
  
  return HOCComponent;
};

witchDateTimePretty.propTypes = {
  dateTime: PropTypes.string.isRequired,
};

export default witchDateTimePretty;
