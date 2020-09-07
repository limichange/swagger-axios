import {
  Resource,
  EnumResourceType,
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

export class ResourcesService {
  /**
   *
   */
  static get3(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/resources/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update4(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: Resource;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/resources/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static delete3(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/resources/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static list3(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/resources';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create4(
    params: {
      /** requestBody */
      body?: Resource;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/resources';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static search3(
    params: {
      /**  */
      name?: string;
      /**  */
      parentId?: string;
      /**  */
      type?: string;
      /**  */
      code?: string;
      /**  */
      path?: string;
      /**  */
      blocked?: boolean;
      /** Zero-based page index (0..N) */
      page?: number;
      /** The size of the page to be returned */
      size?: number;
      /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
      sort?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/resources/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        name: params['name'],
        parentId: params['parentId'],
        type: params['type'],
        code: params['code'],
        path: params['path'],
        blocked: params['blocked'],
        page: params['page'],
        size: params['size'],
        sort: params['sort']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
