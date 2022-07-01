import LandingPage from '~/components/Landing';

export default LandingPage;

// We don't want this to be a `getStaticProps` because we don't
// trigger a rebuild when this DB collection changes.
export async function getServerSideProps() {
  const { default: fetch } = await import('node-fetch');

  const resp = await fetch(`${process.env.ENDPOINT}/tidbits`);
  const tidbits = await resp.json();

  return {
    props: {
      tidbits,
    },
  };
}
