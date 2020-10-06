import HttpService from './Http.service';

export default async function getSubmissions(page: number, query: string) {
  const responseSubmissions = await HttpService.get(`${process.env.ENDPOINT}/exercises/submissions?search=al`)
    .then((response) => response.json())
    .catch((err) => alert(err));
  return responseSubmissions;
}
