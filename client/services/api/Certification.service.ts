import { useEffect, useState } from 'react';
import HttpService from './Http.service';
import { WIPPopulatedCertificationI } from '~/../shared/types/certification.types';

class CertificationService {
  static async getById(
    challengeId: string,
  ): Promise<WIPPopulatedCertificationI> {
    const challenge: WIPPopulatedCertificationI = await HttpService.get(
      `${process.env.ENDPOINT}/certifications/${challengeId}`,
    ).then((resp) => resp.json());

    return challenge;
  }

  static async getByChallenge(
    challengeId: string,
  ): Promise<WIPPopulatedCertificationI> {
    const challenge: WIPPopulatedCertificationI = await HttpService.get(
      `${process.env.ENDPOINT}/certifications/challenge/${challengeId}`,
    ).then((resp) => resp.json());

    return challenge;
  }
}

export const useCertification = ({
  challengeId,
  isLoggedIn,
}: {
  challengeId?: string;
  isLoggedIn: boolean;
}) => {
  const SPAN = `[useCertification, challengeId=${challengeId}]`;
  const [certification, setCertification] = useState<WIPPopulatedCertificationI>(undefined);

  const fetchCertificationByChallenge = async () => {
    try {
      const response = await CertificationService.getByChallenge(challengeId);
      setCertification(response);
    } catch (err) {
      console.error(`${SPAN} Failed to fetch certification by challenge`, err);
    }
  };
  useEffect(() => {
    if (!challengeId || !isLoggedIn) {
      return;
    }

    fetchCertificationByChallenge();
  }, [challengeId, isLoggedIn]);

  return { certification };
};

export default CertificationService;
