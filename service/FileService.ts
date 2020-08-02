import {
  FileSearchCriteria,
  Pageable,
  Sort,
  FileUploadCallbackDto,
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

export class FileService {
  /**
   *
   */
  static files(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/files';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static files1(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/files/{id}';
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
  static search(
    params: {
      /**  */
      criteria: FileSearchCriteria;
      /**  */
      pageable: Pageable;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/files/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { criteria: params['criteria'], pageable: params['pageable'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static callback(
    params: {
      /** requestBody */
      body?: FileUploadCallbackDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/files/callback';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static preUpload(
    params: {
      /**  */
      type: string;
      /**  */
      categoryId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/files/preUpload';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { type: params['type'], categoryId: params['categoryId'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
