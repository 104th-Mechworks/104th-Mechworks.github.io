export interface ReferenceSheetExample {
  title: string
  content: string[]
}

export interface ReferenceSheetSubsection {
  id: string
  title: string
  content: string[]
  example?: ReferenceSheetExample
  maps?: {
    name: string
    imageUrl: string
  }[]
}

export interface ReferenceSheetSection {
  id: string
  title: string
  introduction?: string
  subsections: ReferenceSheetSubsection[]
}

export interface ReferenceSheet {
  id: string
  title: string
  introduction: string
  sections: ReferenceSheetSection[]
  conclusion: string
}
