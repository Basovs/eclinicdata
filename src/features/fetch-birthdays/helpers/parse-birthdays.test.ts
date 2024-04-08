import { BirthdayListItems, BirthdaysResponse } from '../types'
import { parseBirthdays } from './parse-birthdays'

describe('parseBirthdays', () => {
  it('parses and sorts birthdays correctly', (): void => {
    const input: BirthdaysResponse = {
      births: [
        {
          pages: [
            {
              type: 'article',
              title: 'John Doe',
              displaytitle: 'John Doe',
              namespace: { id: 0, text: 'Article' },
              wikibase_item: 'Q123',
              titles: {
                canonical: 'John_Doe',
                normalized: 'John Doe',
                display: 'John Doe',
              },
              pageid: 123456,
              thumbnail: {
                source: 'https://example.com/image1.jpg',
                width: 100,
                height: 100,
              },
              originalimage: {
                source: 'https://example.com/image1.jpg',
                width: 200,
                height: 200,
              },
              lang: 'en',
              dir: 'ltr',
              revision: '1234567890',
              tid: 'abcdef',
              timestamp: '2023-01-01T00:00:00Z',
              description: 'Musician',
              description_source: 'Wikipedia',
              content_urls: {
                desktop: {
                  page: 'https://example.com',
                  revisions: '',
                  edit: '',
                  talk: '',
                },
                mobile: {
                  page: 'https://m.example.com',
                  revisions: '',
                  edit: '',
                  talk: '',
                },
              },
              extract: 'John Doe is a musician...',
              extract_html: '<p>John Doe is a musician...</p>',
              normalizedtitle: 'John_Doe',
            },
          ],
          text: 'John Doe, Musician',
          year: 1990,
        },
        {
          pages: [
            {
              type: 'article',
              title: 'Jane Doe',
              displaytitle: 'Jane Doe',
              namespace: { id: 0, text: 'Article' },
              wikibase_item: 'Q456',
              titles: {
                canonical: 'Jane_Doe',
                normalized: 'Jane Doe',
                display: 'Jane Doe',
              },
              pageid: 654321,
              thumbnail: {
                source: 'https://example.com/image2.jpg',
                width: 100,
                height: 100,
              },
              originalimage: {
                source: 'https://example.com/image2.jpg',
                width: 200,
                height: 200,
              },
              lang: 'en',
              dir: 'ltr',
              revision: '0987654321',
              tid: 'fedcba',
              timestamp: '2022-12-31T23:59:59Z',
              description: 'Actor',
              description_source: 'Wikipedia',
              content_urls: {
                desktop: {
                  page: 'https://example.com',
                  revisions: '',
                  edit: '',
                  talk: '',
                },
                mobile: {
                  page: 'https://m.example.com',
                  revisions: '',
                  edit: '',
                  talk: '',
                },
              },
              extract: 'Jane Doe is an actor...',
              extract_html: '<p>Jane Doe is an actor...</p>',
              normalizedtitle: 'Jane_Doe',
            },
          ],
          text: 'Jane Doe, Actor',
          year: 1985,
        },
      ],
    }

    const result: BirthdayListItems = parseBirthdays(input)

    const expected: BirthdayListItems = [
      {
        image: 'https://example.com/image1.jpg',
        name: 'John Doe',
        year: 1990,
        text: ' Musician',
      },
      {
        image: 'https://example.com/image2.jpg',
        name: 'Jane Doe',
        year: 1985,
        text: ' Actor',
      },
    ]

    expect(result).toEqual(expected)
  })
})
