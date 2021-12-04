interface Base {
  name: string,
  moduleUrl: string,
  moduleName: string,
  certificationUrl: string
  // Optional
  nextModuleUrl?: string,
  nextModuleName?: string,
}

export type AwardedCertificationEmailModel = Base & { ro: true} | Base & { en: true }
