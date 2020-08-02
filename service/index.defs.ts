/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic, { AxiosInstance } from 'axios';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount: number;
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount!: number;
}

// customer definition
// empty
const basePath = '';

export interface Article {
  /** 创建人 */
  createdBy: number;

  /** 创建人 */
  lastModifiedBy: number;

  /** 创建时间 */
  createdDate: Date;

  /** 更新时间 */
  lastModifiedDate: Date;

  /**  */
  id: number;

  /**  */
  title: string;

  /**  */
  lang: string;

  /**  */
  categoryId: number;

  /**  */
  content: string;

  /**  */
  isRecommend: boolean;

  /**  */
  deletedTime: Date;

  /**  */
  version: number;
}

export interface ArticleSearchCriteria {
  /**  */
  categoryId: number;

  /**  */
  title: string;
}

export interface Pageable {
  /**  */
  offset: number;

  /**  */
  sort: Sort;

  /**  */
  pageNumber: number;

  /**  */
  pageSize: number;

  /**  */
  paged: boolean;

  /**  */
  unpaged: boolean;
}

export interface Sort {
  /**  */
  sorted: boolean;

  /**  */
  unsorted: boolean;

  /**  */
  empty: boolean;
}

export interface PageArticle {
  /**  */
  totalPages: number;

  /**  */
  totalElements: number;

  /**  */
  size: number;

  /**  */
  content: Article[];

  /**  */
  number: number;

  /**  */
  sort: Sort;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  pageable: Pageable;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}

export interface LoginRequest {
  /**  */
  username: string;

  /**  */
  password: string;
}

export interface AccessTokenDto {
  /**  */
  token: string;
}

export interface Certificate {
  /** 创建人 */
  createdBy: number;

  /** 创建人 */
  lastModifiedBy: number;

  /** 创建时间 */
  createdDate: Date;

  /** 更新时间 */
  lastModifiedDate: Date;

  /**  */
  id: number;

  /**  */
  categoryId: number;

  /**  */
  certificateNo: string;

  /**  */
  name: string;

  /**  */
  username: string;

  /**  */
  sex: string;

  /**  */
  phone: string;

  /**  */
  idCard: string;

  /**  */
  images: string;

  /**  */
  extInfo: string;

  /**  */
  registrationDate: Date;

  /**  */
  deadlineDate: Date;

  /**  */
  deletedTime: Date;

  /**  */
  version: number;
}

export interface CertificateSearchCriteria {
  /**  */
  username: string;

  /**  */
  certificateNo: string;
}

export interface PageCertificate {
  /**  */
  totalPages: number;

  /**  */
  totalElements: number;

  /**  */
  size: number;

  /**  */
  content: Certificate[];

  /**  */
  number: number;

  /**  */
  sort: Sort;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  pageable: Pageable;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}

export interface DictDetail {
  /** 创建人 */
  createdBy: number;

  /** 创建人 */
  lastModifiedBy: number;

  /** 创建时间 */
  createdDate: Date;

  /** 更新时间 */
  lastModifiedDate: Date;

  /** 字典标签 */
  label: string;

  /** 字典值 */
  value: string;

  /** 排序 */
  dictSort: number;
}

export interface DictDetailSearchCriteria {
  /**  */
  dictId: number;

  /**  */
  label: string;
}

export interface PageDictDetail {
  /**  */
  totalPages: number;

  /**  */
  totalElements: number;

  /**  */
  size: number;

  /**  */
  content: DictDetail[];

  /**  */
  number: number;

  /**  */
  sort: Sort;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  pageable: Pageable;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}

export interface Dict {
  /** 创建人 */
  createdBy: number;

  /** 创建人 */
  lastModifiedBy: number;

  /** 创建时间 */
  createdDate: Date;

  /** 更新时间 */
  lastModifiedDate: Date;

  /**  */
  dictDetails: DictDetail[];

  /** 名称 */
  name: string;

  /** 描述 */
  description: string;
}

export interface DictSearchCriteria {
  /**  */
  name: string;
}

export interface PageDict {
  /**  */
  totalPages: number;

  /**  */
  totalElements: number;

  /**  */
  size: number;

  /**  */
  content: Dict[];

  /**  */
  number: number;

  /**  */
  sort: Sort;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  pageable: Pageable;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}

export interface File {
  /** 创建人 */
  createdBy: number;

  /** 创建人 */
  lastModifiedBy: number;

  /** 创建时间 */
  createdDate: Date;

  /** 更新时间 */
  lastModifiedDate: Date;

  /**  */
  id: string;

  /**  */
  name: string;

  /**  */
  bucket: string;

  /**  */
  etag: string;

  /**  */
  categoryId: number;

  /**  */
  isPublic: boolean;

  /**  */
  deletedTime: Date;

  /**  */
  version: number;
}

export interface FileSearchCriteria {
  /**  */
  name: string;

  /**  */
  md5: string;

  /**  */
  category: number;
}

export interface PageFile {
  /**  */
  totalPages: number;

  /**  */
  totalElements: number;

  /**  */
  size: number;

  /**  */
  content: File[];

  /**  */
  number: number;

  /**  */
  sort: Sort;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  pageable: Pageable;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}

export interface FileUploadCallbackDto {
  /**  */
  bucket: string;

  /**  */
  object: string;

  /**  */
  etag: string;

  /**  */
  mimeType: string;

  /**  */
  uid: string;

  /**  */
  category: string;
}

export interface OssSignatureVo {
  /** accessKeyId */
  accessKeyId: string;

  /** signature */
  signature: string;

  /** policy */
  policy: string;

  /** host */
  host: string;

  /** expire */
  expire: string;

  /** callback */
  callback: string;
}

export interface Resource {
  /** 创建人 */
  createdBy: number;

  /** 创建人 */
  lastModifiedBy: number;

  /** 创建时间 */
  createdDate: Date;

  /** 更新时间 */
  lastModifiedDate: Date;

  /**  */
  id: number;

  /**  */
  parentId: number;

  /**  */
  type: EnumResourceType;

  /**  */
  name: string;

  /**  */
  code: string;

  /**  */
  path: string;

  /**  */
  icon: string;

  /**  */
  seq: number;

  /**  */
  permissions: string;

  /**  */
  hidden: boolean;

  /**  */
  deletedTime: Date;

  /**  */
  version: number;
}

export interface ResourceSearchCriteria {
  /**  */
  name: string;

  /**  */
  parentId: string;

  /**  */
  type: EnumResourceSearchCriteriaType;

  /**  */
  code: string;

  /**  */
  path: string;

  /**  */
  blocked: boolean;
}

export interface PageResource {
  /**  */
  totalPages: number;

  /**  */
  totalElements: number;

  /**  */
  size: number;

  /**  */
  content: Resource[];

  /**  */
  number: number;

  /**  */
  sort: Sort;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  pageable: Pageable;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}

export interface Role {
  /** 创建人 */
  createdBy: number;

  /** 创建人 */
  lastModifiedBy: number;

  /** 创建时间 */
  createdDate: Date;

  /** 更新时间 */
  lastModifiedDate: Date;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  blocked: boolean;

  /**  */
  version: number;
}

export interface RoleSearchCriteria {
  /**  */
  name: string;

  /**  */
  blocked: boolean;
}

export interface PageRole {
  /**  */
  totalPages: number;

  /**  */
  totalElements: number;

  /**  */
  size: number;

  /**  */
  content: Role[];

  /**  */
  number: number;

  /**  */
  sort: Sort;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  pageable: Pageable;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}

export interface User {
  /** 创建人 */
  createdBy: number;

  /** 创建人 */
  lastModifiedBy: number;

  /** 创建时间 */
  createdDate: Date;

  /** 更新时间 */
  lastModifiedDate: Date;

  /**  */
  id: number;

  /**  */
  username: string;

  /**  */
  nickname: string;

  /**  */
  avatar: string;

  /**  */
  phone: string;

  /**  */
  isAdmin: boolean;

  /**  */
  blocked: boolean;

  /**  */
  deletedTime: Date;

  /**  */
  version: number;
}

export interface UserSearchCriteria {
  /**  */
  username: string;

  /**  */
  phone: string;

  /**  */
  blocked: boolean;
}

export interface PageUser {
  /**  */
  totalPages: number;

  /**  */
  totalElements: number;

  /**  */
  size: number;

  /**  */
  content: User[];

  /**  */
  number: number;

  /**  */
  sort: Sort;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  pageable: Pageable;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}
export enum EnumResourceType {
  'MENU' = 'MENU',
  'BUTTON' = 'BUTTON'
}
export enum EnumResourceSearchCriteriaType {
  'MENU' = 'MENU',
  'BUTTON' = 'BUTTON'
}
