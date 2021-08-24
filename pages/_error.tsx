import { NextPageContext } from 'next';

function Error({ statusCode }: { statusCode: number }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server. Please get in touch via email at hello@frontend.ro if the problem persists`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  // Default code
  let statusCode = 500;

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    console.error('[Error.getInitialProps] Neither `res` nor `err` are defined. ');
  }

  return { statusCode };
};

export default Error;
