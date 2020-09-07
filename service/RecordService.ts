import {
  RecordCreateRequest,
  ReviewRequest,
  EnumReviewRequestAction,
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

export class RecordService {
  /**
   * 查询记录
   */
  static getRecord(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/records/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 保存/提交 记录
   */
  static update3(
    params: {
      /**  */
      submit?: boolean;
      /**  */
      id: number;
      /** requestBody */
      body?: RecordCreateRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/records/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);
      configs.params = { submit: params['submit'] };
      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 搜索记录
   */
  static getRecords(
    params: {
      /**  */
      formDefinitionId?: number;
      /**  */
      formName?: string;
      /**  */
      formNo?: string;
      /**  */
      recordNo?: string;
      /**  */
      projectName?: string;
      /**  */
      inspectorId?: number;
      /**  */
      recorderId?: number;
      /**  */
      reviewerId?: number;
      /**  */
      submitTimeLeft?: string;
      /**  */
      submitTimeRight?: string;
      /**  */
      reviewTimeLeft?: string;
      /**  */
      reviewTimeRight?: string;
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
      let url = basePath + '/records';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        formDefinitionId: params['formDefinitionId'],
        formName: params['formName'],
        formNo: params['formNo'],
        recordNo: params['recordNo'],
        projectName: params['projectName'],
        inspectorId: params['inspectorId'],
        recorderId: params['recorderId'],
        reviewerId: params['reviewerId'],
        'submitTime.left': params['submitTimeLeft'],
        'submitTime.right': params['submitTimeRight'],
        'reviewTime.left': params['reviewTimeLeft'],
        'reviewTime.right': params['reviewTimeRight'],
        page: params['page'],
        size: params['size'],
        sort: params['sort']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 保存/提交 记录
   */
  static create3(
    params: {
      /**  */
      submit?: boolean;
      /** requestBody */
      body?: RecordCreateRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/records';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { submit: params['submit'] };
      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 提交
   */
  static submit(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/records/{id}/submit';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 复核记录
   */
  static reviewLog(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/records/{id}/review/log';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 修改记录
   */
  static histories(
    params: {
      /**  */
      id: number;
      /**  */
      recordPropertyId?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/records/{id}/histories';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { recordPropertyId: params['recordPropertyId'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 预览-HTML片段
   */
  static preview(
    params: {
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/records/{id}/preview';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 复核
   */
  static review(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: ReviewRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/records/{id}/review';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
