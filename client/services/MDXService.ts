import { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';
import { compile, runSync } from '@mdx-js/mdx';
import { useMDXComponents } from '@mdx-js/react';

class MDXService {
  static async compile(mdx: string, scope: Record<string, any>): Promise<string> {
    const compiledMdx = MDXService.appendMdxScope(mdx, scope);
    const result = await compile(compiledMdx, {
      development: false,
      outputFormat: 'function-body',
      // This is what the next-mdx-remote also does,
      // so let's put the same values (instead of `#`).
      providerImportSource: '@mdx-js/react',
    });
    
    return result.toString();
  }

  static getComponent(mdxContent: string) {
    // Here ESLint is messing up. We're not inside a class component
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { default: Content } = useMemo(
      () =>
        runSync(mdxContent, {
          ...runtime,
          useMDXComponents,
        }),
      [mdxContent]
    );

    return Content;
  }

  static async fetchMDX(lessonId: string): Promise<string> {
    let mdxContent = '';

    switch (lessonId) {
      case 'despre-noi': {
        const { default: mdxAsString } = await import('!raw-loader!~/curriculum/intro/despre-noi.mdx');
        mdxContent = mdxAsString as unknown as string;
        break;
      }
      case 'vs-code': {
        const { default: mdxAsString } = await import('!raw-loader!~/curriculum/intro/VSCode.mdx');
        mdxContent = mdxAsString as unknown as string;
        break;
      }
      case 'despre-html': {
        const { default: mdxAsString } = await import('!raw-loader!~/curriculum/html/mdx/AboutHtml.mdx');
        mdxContent = mdxAsString as unknown as string;
        break;
      }
      case 'structura-pagina-html': {
        const { default: mdxAsString } = await import('!raw-loader!~/curriculum/html/mdx/HTMLStructure.mdx');
        mdxContent = mdxAsString as unknown as string;
        break;
      }
      case 'audio-video': {
        const { default: mdxAsString } = await import('!raw-loader!~/curriculum/html/mdx/AudioAndVideo.mdx');
        mdxContent = mdxAsString as unknown as string;
        break;
      }
      case 'texte': {
        const { default: mdxAsString } = await import('!raw-loader!~/curriculum/html/mdx/TextElements.mdx');
        mdxContent = mdxAsString as unknown as string;
        break;
      }
      case 'containere': {
        const { default: mdxAsString } = await import('!raw-loader!~/curriculum/html/mdx/Containers.mdx');
        mdxContent = mdxAsString as unknown as string;
        break;
      }
    }

    return mdxContent;
  }

  // Kinda hackish way to inject outside variables/scope into MDX Files
  // As you can see we're doing this by specifically exporting a `SCOPE` variable
  // from the MDX file. Looks a bit weird, but should work as long as]
  // 1. The scope can be serialized to JSON
  // 2. We don't have another variable in the file called SCOPE
  private static appendMdxScope(
    compiledMdx: string,
    scope: Record<string, any>
  ) {
    return `export const SCOPE = ${JSON.stringify(scope)};\n\n${compiledMdx}`;
  }
}

export { MDXService };
