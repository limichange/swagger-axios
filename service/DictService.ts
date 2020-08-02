import {
  Dict,
  DictDetail,
  DictSearchCriteria,
  Pageable,
  Sort,
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

export class DictService {
  /**
   *
   */
  static dicts(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dicts/{id}';
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
  static dicts1(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dicts/{id}';
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
  static dicts2(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dicts';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static dicts3(
    params: {
      /** requestBody */
      body?: Dict;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dicts';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static dicts4(
    params: {
      /** requestBody */
      body?: Dict;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dicts';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static search(
    params: {
      /**  */
      criteria: DictSearchCriteria;
      /**  */
      pageable: Pageable;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dicts/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { criteria: params['criteria'], pageable: params['pageable'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
