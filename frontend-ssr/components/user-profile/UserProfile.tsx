export default function UserProfile({ user } : any) {
  return (
    <div>
      Profile page for
      <strong>
        {' '}
        {user.name}
        {' '}
      </strong>
      <br />

      <br />
      If you want to see how it looks like when something fails on the server,
      navigate to
      {' '}
      <code>/error</code>
      <br />
      <br />
      If you want to see what happens if the username doesn't exist, put any other username
    </div>
  );
}
