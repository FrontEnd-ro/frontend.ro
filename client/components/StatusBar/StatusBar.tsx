// FIXME: use camelCase
/* eslint-disable camelcase */
import React from 'react';

enum App_Status {
  OK = 'OK',
  REFRESH_REQUIRED = 'REFRESH_REQUIRED'
}

class StatusBar extends React.Component<{ app_status: App_Status }> {
  render() {
    const { app_status } = this.props;

    return (
      <p>
        {app_status === App_Status.OK && (
          'Everything is OK ✔'
        )}

        {app_status === App_Status.REFRESH_REQUIRED && (
          'Please refresh the app to get the latest version'
        )}
      </p>
    );
  }
}

export default StatusBar;
