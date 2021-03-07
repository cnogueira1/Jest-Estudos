import { HttpPostClient, HttpPostParams, HttpResponse } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResult = await axios.post(params.url, params.body)
    return {
      statusCode: httpResult.status,
      body: httpResult.data
    }
  }
}
