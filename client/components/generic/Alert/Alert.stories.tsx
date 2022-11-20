import Alert from './Alert';

export default {
  title: 'Generic/Alert',
};

export const WithIcon = () => (
  <>
    <Alert severity="error"> The HTML code is invalid. </Alert>
    <Alert className="mt-4" severity="warning"> Your subscription will expire in 30 days. </Alert>
    <Alert className="mt-4" severity="info"> The next exercise is not available. </Alert>
    <Alert className="mt-4" severity="success"> Congratulations. You've finished the tutorial! </Alert>
  </>
);

export const WithoutIcon = () => (
  <>
    <Alert withIcon={false} severity="error"> The HTML code is invalid. </Alert>
    <Alert className="mt-4" withIcon={false} severity="warning"> Your subscription will expire in 30 days. </Alert>
    <Alert className="mt-4" withIcon={false} severity="info"> The next exercise is not available. </Alert>
    <Alert className="mt-4" withIcon={false} severity="success"> Congratulations. You've finished the tutorial! </Alert>
  </>
);
