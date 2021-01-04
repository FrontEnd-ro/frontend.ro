/* eslint-disable no-restricted-globals */
export enum LogEventType {
  ROUTE = 'ROUTE',
  END = 'END',
}

interface Log {
  url: string;
  type: LogEventType;
  timestamp: string;
}

class ClientMonitoring {
  private static endpoint = 'https://frontendro-default-rtdb.firebaseio.com/logs.json'

  public static log = (type: LogEventType) => {
    const log : Log = {
      type,
      url: location.pathname,
      timestamp: new Date().toString(),
    };

    return fetch(ClientMonitoring.endpoint, {
      method: 'POST',
      body: JSON.stringify(log),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .catch((err) => {
        console.error('[ClientMonitoring.log]', err);
      });
  }

  public static destroy = () => {
    const log : Log = {
      type: LogEventType.END,
      url: location.pathname,
      timestamp: new Date().toString(),
    };

    navigator.sendBeacon(ClientMonitoring.endpoint, JSON.stringify(log));
  }
}

export default ClientMonitoring;
