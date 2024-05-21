import { type ClientSchema, a, defineData } from '@aws-amplify/backend'

const schema = a.schema({
  Todo: a
    .model({
      id: a.id().required(),
      title: a.string(),
      content: a.string(),
      is_done: a.boolean(),
      type: a.enum(['Todo']),
      created_at: a.datetime().required(),
    })
    .secondaryIndexes(index => [index('type').sortKeys(['created_at']).queryField('listByDate')])
    .authorization(allow => [allow.guest()]),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
})
