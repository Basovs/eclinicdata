export type Birthday = {
  text: string
  pages: Array<{
    type: string
    title: string
    displaytitle: string
    namespace: {
      id: number
      text: string
    }
    wikibase_item: string
    titles: {
      canonical: string
      normalized: string
      display: string
    }
    pageid: number
    thumbnail?: {
      source: string
      width: number
      height: number
    }
    originalimage?: {
      source: string
      width: number
      height: number
    }
    lang: string
    dir: string
    revision: string
    tid: string
    timestamp: string
    description: string
    description_source: string
    content_urls: {
      desktop: {
        page: string
        revisions: string
        edit: string
        talk: string
      }
      mobile: {
        page: string
        revisions: string
        edit: string
        talk: string
      }
    }
    extract: string
    extract_html: string
    normalizedtitle: string
  }>
  year: number
}

export type Birthdays = Birthday[]

export type BirthdaysResponse = {
  births: Birthdays
}

export type BirthdayListItem = {
  image: string
  name: string
  year: number
  text: string
}

export type BirthdayListItems = BirthdayListItem[]
