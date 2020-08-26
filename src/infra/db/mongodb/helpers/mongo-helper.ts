import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection<T = any> (name: string): Promise<Collection<T>> {
    if (!this.client?.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map<T>(data: any): T {
    const { _id, ...collectionWithoutId } = data
    return {
      ...collectionWithoutId,
      id: _id
    }
  },

  mapCollection<T>(collection: any[]): T[] {
    return collection.map(c => MongoHelper.map(c))
  }
}
