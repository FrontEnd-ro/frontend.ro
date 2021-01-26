import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import LogRocketService from '~/services/utils/LogRocket.service';

/**
 * This component "listens" to the User Store and
 * identifies the logged in user in LogRocket.
 *
 * When that user logs out, it clear all the data.
 */
function IdentifyLogrocket({ userInfo }: ConnectedProps<typeof connector>) {
  if (typeof window === 'undefined') {
    /** Client-side only */
    return null;
  }

  if (!userInfo && LogRocketService.getIdentityData()) {
    LogRocketService.anonymize();
  }

  if (userInfo && !LogRocketService.getIdentityData()) {
    LogRocketService.identify(userInfo);
  }

  return null;
}

function mapStateToProps(state: RootState) {
  return {
    userInfo: state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(IdentifyLogrocket);
