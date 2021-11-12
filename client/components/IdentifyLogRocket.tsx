import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { UserRole } from '~/../shared/types/user.types';
import { RootState } from '~/redux/root.reducer';
import LogRocketService from '~/services/utils/LogRocket.service';

/**
 * This component "listens" to the User Store and
 * identifies the logged in user in LogRocket.
 *
 * When that user logs out, it clear all the data.
 */
function IdentifyLogrocket({ userInfo }: ConnectedProps<typeof connector>) {
  useEffect(() => {
    if (process.env.APP_ENV !== 'production') {
      return;
    }

    if (userInfo?.role === UserRole.ADMIN) {
      console.info("Don't initialize LogRocket for admin users.");
      return;
    }

    LogRocketService.init();

    if (userInfo) {
      LogRocketService.identify(userInfo);
    } else {
      LogRocketService.anonymize();
    }
  }, [userInfo]);

  return null;
}

function mapStateToProps(state: RootState) {
  return {
    userInfo: state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(IdentifyLogrocket);
