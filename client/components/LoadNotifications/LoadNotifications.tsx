import noop from 'lodash/noop';
import { useEffect, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import { replaceNotificationsSuccess } from '~/redux/user/user.actions';
import NotificationService from '~/services/api/Notification.service';

/**
 * This is an empty component that holds the logic for
 * fetching and re-fetching notificaitons.
 *
 * We could put this logic straight into `_app.tsx`, but since we
 * want to keep it simple and small, decided to extract into
 * a separate component that we can just Insert/Remove from App
 */
function LoadNotifications({ dispatch, isLoggedIn }: ConnectedProps<typeof connector>) {
  const intervalId = useRef(null);
  const INTERVAL_DURATION = 30 * 1000;

  const replaceNotifications = () => {
    NotificationService.fetchAll()
      .then((notifications) => {
        dispatch(replaceNotificationsSuccess(notifications));
      })
      .catch((err) => console.error('<LoadNotifications>', err));
  };

  useEffect(() => {
    if (!isLoggedIn) {
      return noop;
    }

    replaceNotifications();
    intervalId.current = setInterval(replaceNotifications, INTERVAL_DURATION);

    return () => clearTimeout(intervalId.current);
  }, [isLoggedIn]);

  return null;
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(LoadNotifications);
