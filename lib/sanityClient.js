import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'bpxcddi1',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token:'sk07MmTg1LWQtQ80KGBY6yRr3tZF3fW8FQPpDYmk6zDoBbDToTZoFYqu8MNfOWRLmbAYM8rEIbYonIbQ17T725MvBHJjV64gqx7eoBjkWYNBgrWCtHP54RvK7kFgWL0RnC7qMv6g8VIOHG3olWJVBxaS9kVT3eHVYNOPseunRTGIvjFLYLI2',
  useCdn: false,
})