import React from 'react';
import { useRouter } from 'next/router';
import SEOTags from '~/components/SEOTags';
import SolveExercise from '~/components/SolveExercise';

function SolveExercisePage() {
  const router = useRouter();
  const { solveExerciseId } = router.query;

  return (
    <>
      <SEOTags
        title="Rezolvă exercițiul | FrontEnd.ro"
        shareImage="https://frontend.ro/learn-seo-image.jpg"
        description="Rezolvă și trimite exercițiul pentru a primi feedback pe el"
        url={`https://FrontEnd.ro/rezolva/${solveExerciseId}`}
      />
      <SolveExercise
        exerciseId={Array.isArray(solveExerciseId) ? solveExerciseId[0] : solveExerciseId}
      />
    </>
  );
}

export default SolveExercisePage;
