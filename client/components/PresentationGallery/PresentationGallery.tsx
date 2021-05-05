import React from 'react';
import PageContainer from '~/components/PageContainer';
import { PresentationI } from '../PresentationPreview';
import PresentationLink from './PresentationLink/PresentationLink';

function AllPresentationsPage({ presentations }: {presentations: PresentationI[]}) {
  return (
    <PageContainer>
      <h1>Slide-uri</h1>
      <p className="mb-4">
        Mai jos găsești slide-urile folosite în toate trainingurile noastre
      </p>
      {presentations.map((presentation) => (
        <PresentationLink
          key={presentation.presentationId}
          id={presentation.presentationId}
          created={presentation.created}
          thumb={presentation.thumb}
          href={`/slides/${presentation.presentationId}`}
          title={presentation.title}
          description={presentation.description}
        />
      ))}

    </PageContainer>
  );
}

export default AllPresentationsPage;
