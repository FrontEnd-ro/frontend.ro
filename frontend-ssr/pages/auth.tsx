import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/login';
import ExercisePreview, { ExercisePreviewSkeleton } from '~/components/ExercisePreview';

export default function Authpage() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <Login />
      <br />
      <br />
      <br />
      <div style={{ width: '20em', marginLeft: '5em' }}>
        <ExercisePreview
          body={`
# Body

### Ceva

Altceva altceva Altceva altceva Altceva altceva

# Inca unu

[ceva](https://iampava.com)`}
          author={{ username: 'iampava', avatar: 'https://www.gravatar.com/avatar/76d4eae48c3e6bac559bd0b0aeea4a1e?s=500' }}
          feedbackCount={0}
          href="#"
          isPrivate
          tags={['html', 'beginner', 'go']}
          viewMode="STUDENT"
          isApproved={false}
          readOnly={false}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div style={{ width: '20em', marginLeft: '5em' }}>
        <ExercisePreviewSkeleton />
      </div>

      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}
