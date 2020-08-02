import {
  DictDetail,
  DictDetailSearchCriteria,
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

export class DictDetailService {
  /**
   *
   */
  static dictDetails(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dictDetails/{id}';
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
  static dictDetails1(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dictDetails/{id}';
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
  static dictDetails2(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dictDetails';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static dictDetails3(
    params: {
      /** requestBody */
      body?: DictDetail;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dictDetails';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static dictDetails4(
    params: {
      /** requestBody */
      body?: DictDetail;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dictDetails';

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
      criteria: DictDetailSearchCriteria;
      /**  */
      pageable: Pageable;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dictDetails/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { criteria: params['criteria'], pageable: params['pageable'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
