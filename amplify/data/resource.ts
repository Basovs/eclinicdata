import { type ClientSchema, a, defineData } from '@aws-amplify/backend'

const schema = a.schema({
  Todo: a
    .model({
      id: a.id().required(),
      title: a.string(),
      content: a.string(),
      is_done: a.boolean(),
      created_at: a.timestamp().required(),
    })
    .identifier(['id', 'created_at'])
    .authorization(allow => [allow.guest()]),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
})
