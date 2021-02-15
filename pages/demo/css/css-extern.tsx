import React from 'react';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import BasicEditorLazy from '~/components/Editor/BasicEditor/BasicEditor.lazy';
import { ExerciseFile, ExerciseFolder } from '~/services/utils/FolderStructure';
import SEOTags from '~/components/SEOTags';

export default function ExternalMethod() {
  const title = 'CSS Externă';
  return (
    <>
      <SEOTags
        title={`${title} | FrontEnd.ro`}
        description="Utilizarea metodei CSS-ului extern pentru stilizarea paginilor Web"
        url="https://FrontEnd.ro/demo/css/css-extern"
        shareImage="https://frontend.ro/seo/styling-methods.jpg"
      />
      <>
        <Header demoPage />
        <Demo title={title}>
          <DemoPreview className="mb-4">
            <div>
              <h1>Rafa is the best dog</h1>
              <p>My dog is named Rafa and he is the best dog in the world.</p>
              <img
                alt="Golden retriever and ball"
                src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/golden-retriever-and-ball.jpg`}
              />
            </div>
          </DemoPreview>
          <BasicEditorLazy folderStructure={externCssExample} readOnly />
        </Demo>
        <Footer />
      </>
    </>
  );
}

const externCssExample: {
  folders: ExerciseFolder[],
  files: ExerciseFile[]
} = {
  folders: [{
    key: 'style',
    name: 'style',
    files: [{
      key: 'custom.css',
      name: 'custom.css',
      content: `body {
  color: #fff;
  text-align: center;
  font-family: sans-serif;
  background-color: #282a36;
}`,
    }, {
      key: 'style.css',
      name: 'style.css',
      content: `h1 {
  text-align: center;
  font-size: 40px;
  text-decoration: underline;
}
img {
  width: 30vw;
  max-width: 100%;
  max-height: 100%;
}
p {
  font-size: 33px;
  text-align: center;
  margin-left: 50px;
}
`,
    }],
    folders: [],
  }],
  files: [{
    key: 'index.html',
    name: 'index.html',
    content: `<!DOCTYPE html>
<html>
<head>
  <title>My Dog</title>
  <link rel="stylesheet" href="style/style.css">
  <link rel="stylesheet" href="style/custom.css">
</head>
<body>
    <h1>Rafa is the best dog</h1>
    <p>My dog is named Rafa and he is the best dog in the world.</p>
    <img src="${process.env.CLOUDFRONT_PUBLIC}/demo-assets/golden-retriever-and-ball.jpg" alt="Golden retriever and ball" />
</body>
</html>
`,
  }],
};
