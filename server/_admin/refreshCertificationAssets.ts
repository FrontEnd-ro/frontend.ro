require("dotenv").config();
import { connectToDb } from "../database";
import {
  Certification,
  refreshCertificationAssets,
} from "../certification/certification.model";

const CERTIFICATION_ID = "";
const DRY_RUN = true;

connectToDb()
  .catch((err) => {
    console.error("[refreshCertificationAssets.connectToDb]", err);
    process.exit(1);
  })
  .then(() => main(CERTIFICATION_ID));

async function main(certificationId: string) {
  const SPAN = `main, certificationId=${certificationId}, dryRun=${DRY_RUN}`;

  const certification = await Certification.findById(certificationId).catch(
    (err) => {
      console.error(`${SPAN} failed fetch certification`, err);
      process.exit(1);
    }
  );

  if (certification === null) {
    console.info(`${SPAN} certification doesn't exist.`);
    process.exit(1);
  }

  const updatedCertification = await refreshCertificationAssets(certification, DRY_RUN).catch((err) => {
    console.error(`${SPAN} failed to refresh assets`, err);
    process.exit(1);
  });

  console.log(`${SPAN} successfully refreshed assets.`, updatedCertification.toJSON());
  process.exit(1);
}
