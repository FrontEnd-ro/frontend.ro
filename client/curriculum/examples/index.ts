import { CurriculumExamples } from "./examples";
import { examples as examples_formulare } from "./examples_formulare";
import { examples as examples_containere } from "./examples_containere";
import { examples as examples_despre_html } from "./examples_despre_html";

export function getExamples(id: string): CurriculumExamples {
  switch (id) {
    case 'formulare': {
      return examples_formulare;
    }
    case 'containere': {
      return examples_containere;
    }
    case 'despre-html': {
      return examples_despre_html;
    }
    default: {
      return {}
    }
  }
}
