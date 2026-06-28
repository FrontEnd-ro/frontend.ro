// React 19 + the automatic JSX runtime removed the global `JSX` namespace in
// favour of `React.JSX`. A lot of this (older) codebase still uses the bare
// global `JSX.Element` / `JSX.IntrinsicElements`. This shim re-exposes the
// global `JSX` namespace, mapping it onto `React.JSX`, so we don't have to edit
// every file that referenced it.
import type * as React from 'react';

declare global {
  namespace JSX {
    type Element = React.JSX.Element;
    type ElementType = React.JSX.ElementType;
    type ElementClass = React.JSX.ElementClass;
    type IntrinsicElements = React.JSX.IntrinsicElements;
    type IntrinsicAttributes = React.JSX.IntrinsicAttributes;
    type IntrinsicClassAttributes<T> = React.JSX.IntrinsicClassAttributes<T>;
    type ElementAttributesProperty = React.JSX.ElementAttributesProperty;
    type ElementChildrenAttribute = React.JSX.ElementChildrenAttribute;
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>;
  }
}
