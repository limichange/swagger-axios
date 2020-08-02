import {
  LoginRequest,
  IList,
  List,
  IListResult,
  ListResultDto,
  IPagedResult,
  PagedResultDto,
  Dictionary,
  IDictionary,
  IRequestOptions,
  IRequestConfig,
  getConfigs,
  axios
} from './index.defs';

export class AuthService {
  /**
   *
   */
  static me(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/me';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static token(
    params: {
      /** requestBody */
      body?: LoginRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/token';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
