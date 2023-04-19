// Inspiration from: https://github.com/aralroca/next-translate/issues/721

import UnsafeTrans from "next-translate/Trans";
import { TranslationQuery } from "next-translate";
import unsafeUseTranslation from "next-translate/useTranslation";
import type { TransProps as UnsafeTransProps } from "next-translate";

import common from "../../locales/en/common.json";

type Join<S1, S2> = S1 extends string
  ? S2 extends string
    ? `${S1}.${S2}`
    : never
  : never;

export type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? Join<K, Paths<T[K]>>
    : K;
}[keyof T];

export type TranslationKeys = {
  common: Paths<typeof common>;
};

export const useTranslation = <T extends keyof TranslationKeys>(
  ns: T
) => {
  const { t, lang } = unsafeUseTranslation(ns);

  return {
    t: (
      s: TranslationKeys[T],
      q?: TranslationQuery,
      o?: {
        returnObjects?: boolean;
        fallback?: string | string[];
        default?: string;
      }
    ) => t(s, q, o),
    lang,
  };
};

export interface TransProps<Namespace extends keyof TranslationKeys>
  extends Omit<UnsafeTransProps, "i18nKey"> {
  i18nKey: `${Namespace}:${TranslationKeys[Namespace]}`;
}

export function Trans<Namespace extends keyof TranslationKeys>(
  props: TransProps<Namespace>
): JSX.Element {
  return <UnsafeTrans {...props} />;
}
