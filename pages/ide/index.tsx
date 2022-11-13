import SEOTags from '~/components/SEOTags';
import FolderStructure from '~/services/utils/FolderStructure';
import { FullScreenIDE } from '~/components/FullScreenIDE/FullScreenIDE';

export default () => {
  const startingFolderStructure = new FolderStructure({
    folders: [],
    files: [{
      key: 'App.js',
      name: 'App.js',
      content: `export default function App() {
  return <h1>Hello There World</h1>
}`,
    }],
  });
  return (
    <>
      <SEOTags
        title="Full Screen Editor | TODO"
        url="TODO"
        description="TODO"
      />
      <FullScreenIDE initialFolderStructure={startingFolderStructure} />
    </>
  );
};
