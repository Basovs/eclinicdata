import { type ClientSchema, a, defineData } from '@aws-amplify/backend'

const schema = a.schema({
  Todo: a
    .model({
      title: a.string(),
      content: a.string(),
      is_done: a.boolean(),
      createdAt: a.timestamp(),
    })
    // .secondaryIndexes(index => [index('createdAt').sortKeys([''])])
    .authorization(allow => [allow.guest()]),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
})
