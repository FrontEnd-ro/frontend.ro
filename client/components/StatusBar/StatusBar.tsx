import React from 'react';

enum AppStatus {
  OK = 'OK',
  REFRESH_REQUIRED = 'REFRESH_REQUIRED'
}

function StatusBar({ appStatus }: { appStatus: AppStatus }) {
  return (
    <p>
      {appStatus === AppStatus.OK && (
        'Everything is OK ✔'
      )}

      {appStatus === AppStatus.REFRESH_REQUIRED && (
        'Please refresh the app to get the latest version'
      )}
    </p>
  );
}

export default StatusBar;
