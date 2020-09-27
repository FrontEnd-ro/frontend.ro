/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import Header from '~/components/header/Header.component';
import {
  updateField, storeUserDetails, duplicatedKeyError, reqInProgress,
} from '~/redux/actions/username';
import styles from '~/styles/pages/username.module.scss';

const OPTIONAL_FIELDS = ['avatar', '_id'];
const DEFAULT_USER_IMG_SRC = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png'; // get the link from S3
const fieldsErrorMessages = {
  name: 'Please add your name',
  username: 'Please add a valid username',
  emailAddressIsNotValid: '',
  usernameAlreadyInUse: 'The username already exists. Please use a different username',
  emailAlreadyInUse: 'The email address already exists. Please use a different email address',
  email: 'Please add your email address',
};

const isFormValidForSubmission = (userDetails) => {
  const formKeys = Object.keys(userDetails).filter((key: string) => !OPTIONAL_FIELDS.includes(key));
  return formKeys.some((key) => !userDetails[key]);
};

class UserProfile extends React.Component {
  componentDidMount = () => {
    const { dispatchStoreUserDetails, user } = this.props;
    dispatchStoreUserDetails(user);
  }

  updateField = (value: any, field: string) => {
    const { dispatchUpdateFields } = this.props;
    if (field === 'avatar') {
      const data = new FormData();
      data.append('file', value);
      // eslint-disable-next-line no-param-reassign
      value = data;
    }
    return dispatchUpdateFields(value, field);
  }

  updateUserDetails = async () => {
    const {
      userDetails, dispatchDuplicatedKeyError, dispatchRequestInProgress, router,
    } = this.props;
    dispatchRequestInProgress();
    const existingUsername = router.query.username;
    const newUsername = userDetails.username;
    const updateUserResponse = await fetch(`/api/users/${router.query.username}`, {
      method: 'PUT',
      body: JSON.stringify(userDetails),
    });
    const res = await updateUserResponse.json();
    const isKeyDuplicated = !res.success && res.duplicatedKey;

    if (isKeyDuplicated) {
      dispatchDuplicatedKeyError(res.duplicatedKey);
    }

    if (existingUsername !== newUsername && !isKeyDuplicated) {
      router.push(`/${newUsername}`);
    }

    return dispatchRequestInProgress();
  }

  render() {
    const {
      userDetails, usernameAlreadyInUse, emailAreadyInUse, requestInProgress,
    } = this.props;
    const {
      name, username, avatar, email,
    } = userDetails;
    const isFormValid = isFormValidForSubmission(userDetails);

    return (
      <>
        <Head>
          <title>
            { `${name || ''} ` }
            | FrontEnd.ro
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
          <Header />
          <main className={styles.page}>
            <img alt={name} src={avatar || DEFAULT_USER_IMG_SRC} />
            <label htmlFor="name">
              <b>Name</b>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Name"
                className={!name ? styles.inputRequired : ''}
                onChange={(e) => this.updateField(e.target.value, 'name')}
              />
              <div className={styles.validationMessageContainer}>
                { !name ? fieldsErrorMessages.name : null }
              </div>
            </label>
            {' '}
            <br />
            <label htmlFor="username">
              <b>Username</b>
              <input
                type="text"
                id="username"
                value={username}
                placeholder="Username"
                className={!username ? styles.inputRequired : ''}
                onChange={(e) => this.updateField(e.target.value, 'username')}
              />
              <div className={styles.validationMessageContainer}>
                { !username ? fieldsErrorMessages.username : null }
                { usernameAlreadyInUse ? fieldsErrorMessages.usernameAlreadyInUse : null }
              </div>
            </label>
            {' '}
            <br />
            <label htmlFor="email">
              <b>Email address</b>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email address"
                className={!email ? styles.inputRequired : ''}
                onChange={(e) => this.updateField(e.target.value, 'email')}
              />
              <div className={styles.validationMessageContainer}>
                { !email ? fieldsErrorMessages.email : null }
                { emailAreadyInUse ? fieldsErrorMessages.emailAlreadyInUse : null }
              </div>
            </label>
            {' '}
            <br />
            <label htmlFor="avatar">
              <b>Avatar</b>
              <input
                type="file"
                id="avatar"
                value={avatar}
                placeholder="Avatar"
                onChange={(e) => this.updateField(e.target.files, 'avatar')}
              />
            </label>
            {' '}
            <br />
            <button
              type="button"
              disabled={isFormValid}
              onClick={() => this.updateUserDetails()}
              className={`btn btn--success ${requestInProgress ? 'btn--loading' : ''} updateDetailsBtn`}
            >
              <b>Update</b>
            </button>
          </main>
        </>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  userDetails: state.username.userDetails || ownProps.user,
  userProgress: state.username.userProgress,
  usernameAlreadyInUse: state.username.usernameAlreadyInUse,
  emailAreadyInUse: state.username.emailAreadyInUse,
  requestInProgress: state.username.requestInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateFields: (value: any, field: string) => dispatch(updateField(value, field)),
  dispatchStoreUserDetails: (user: any) => dispatch(storeUserDetails(user)),
  dispatchDuplicatedKeyError: (key) => dispatch(duplicatedKeyError(key)),
  dispatchRequestInProgress: () => dispatch(reqInProgress()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
