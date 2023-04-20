import { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';
import { compile, runSync } from '@mdx-js/mdx';
import { useMDXComponents } from '@mdx-js/react';
import { LessonDescription } from './DataModel';

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

  // NOTE: this function is called inside `getServerSideProps` to 
  // fetch MDX when rendering lessons.
  static async serverFetchMDX(lessonId: string, type: LessonDescription['type'], locale: string): Promise<{
    ok: true;
    content: string;
  } | {
    ok: false;
  }> {
    const SPAN = `serverFetchMDX(${lessonId}, ${type})`;
    try {
      const { default: content } = await import(`!raw-loader!~/curriculum/${type}/${locale}/${lessonId}.mdx`);
      return {
        ok: true,
        content,
      };
    } catch (err) {
      console.error(`[${SPAN}] Failed to read MDX Content`, err);
      return {
        ok: false
      }
    }
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
