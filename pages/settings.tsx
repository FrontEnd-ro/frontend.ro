import React from 'react';
import ArchivedNotice from '~/components/ArchivedNotice';

export default function SettingsPage() {
  return (
    <ArchivedNotice
      seoTitle="Setări | FrontEnd.ro"
      message="Setările contului nu mai sunt disponibile. FrontEnd.ro este acum o arhivă păstrată în mod read-only, fără conturi sau funcționalități interactive. Poți totuși să explorezi lecțiile și conținutul rămas."
    />
  );
}
