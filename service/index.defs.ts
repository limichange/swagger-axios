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

export interface PasswordModifyRequest {
  /**  */
  oldPassword: string;

  /**  */
  password: string;

  /**  */
  confirmPassword: string;
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
  pageable: Pageable;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
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
  pageable: Pageable;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}

export interface FormDefinition {
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
  formNo: string;

  /**  */
  description: string;

  /**  */
  recordNoTemplate: string;

  /**  */
  template: string;

  /**  */
  rootType: EnumFormDefinitionRootType;

  /**  */
  blocked: boolean;

  /**  */
  deleted: boolean;

  /**  */
  version: number;
}

export interface FieldDefinition {
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
  formDefinitionId: number;

  /**  */
  parentId: number;

  /**  */
  index: number;

  /**  */
  label: string;

  /**  */
  type: EnumFieldDefinitionType;

  /**  */
  optional: boolean;

  /**  */
  validate: string;

  /**  */
  values: string;

  /**  */
  length: number;
}

export interface PageFormDefinition {
  /**  */
  totalPages: number;

  /**  */
  totalElements: number;

  /**  */
  size: number;

  /**  */
  content: FormDefinition[];

  /**  */
  number: number;

  /**  */
  sort: Sort;

  /**  */
  pageable: Pageable;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}

export interface FieldDefinitionVo {
  /** ID */
  id: number;

  /** 编号 */
  index: number;

  /** 字段类型 */
  type: EnumFieldDefinitionVoType;

  /** 是否可选 */
  optional: boolean;

  /** 校验规则 */
  validate: string;

  /** 可选值 */
  values: string[];

  /** 长度 */
  length: number;

  /** 子节点 */
  children: FieldDefinitionVo[];
}

export interface FormDefinitionVo {
  /** id */
  id: number;

  /** 表单名 */
  name: string;

  /** 表单编号 */
  formNo: string;

  /** 表单描述 */
  description: string;

  /** 根节点类型 */
  rootType: EnumFormDefinitionVoRootType;

  /** 字段列表 */
  fields: FieldDefinitionVo[];
}

export interface FieldDefinitionRequest {
  /** 父节点ID */
  parentId: number;

  /** 序号 */
  index: number;

  /** 名称 */
  label: string;

  /** 节点类型 */
  type: EnumFieldDefinitionRequestType;

  /** 是否可选 */
  optional: boolean;

  /** 校验规则(未定义) */
  validate: string;

  /** 可选值 */
  values: string[];

  /** 长度 */
  length: number;
}

export interface RecordCreateRequest {
  /** 表单ID */
  formDefinitionId: number;

  /** 记录编号 */
  recordNo: string;

  /** 工程名称 */
  projectName: string;

  /** 样品信息 */
  sampleInfo: string;

  /** 试验检测日期 */
  inspectDate: string;

  /** 试验条件 */
  testConditions: string;

  /** 制表时间 */
  tabulatingDate: string;

  /** 检测依据 */
  testBasis: string;

  /** 判定依据 */
  judgmentBasis: string;

  /** 附加声明 */
  additional: string;

  /** 检测人员ID */
  inspector: number;

  /** 记录人员ID */
  recorder: number;

  /** 主要仪器设备ID */
  devices: string[];

  /**  */
  detectionInfo: object;
}

export interface Record {
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
  formDefinitionId: number;

  /**  */
  formName: string;

  /**  */
  formNo: string;

  /**  */
  recordNo: string;

  /**  */
  projectName: string;

  /**  */
  sampleInfo: string;

  /**  */
  inspectDate: string;

  /**  */
  testConditions: string;

  /**  */
  tabulatingDate: string;

  /**  */
  testBasis: string;

  /**  */
  judgmentBasis: string;

  /**  */
  additional: string;

  /**  */
  status: EnumRecordStatus;

  /**  */
  inspector: number;

  /**  */
  recorder: number;

  /**  */
  submitter: number;

  /**  */
  submitTime: Date;

  /**  */
  reviewer: number;

  /**  */
  reviewRemark: string;

  /**  */
  reviewTime: Date;

  /**  */
  ext1: string;

  /**  */
  ext2: string;

  /**  */
  ext3: string;

  /**  */
  template: string;

  /**  */
  version: number;
}

export interface RecordReviewLogVo {
  /**  */
  id: number;

  /** 记录ID */
  recordId: number;

  /** 记录版本号 */
  recordVersion: number;

  /** 结论 */
  action: EnumRecordReviewLogVoAction;

  /** 备注 */
  remark: string;

  /** 创建人 */
  createdBy: number;

  /** 创建人 */
  lastModifiedBy: number;

  /** 创建时间 */
  createdDate: Date;

  /** 更新时间 */
  lastModifiedDate: Date;

  /**  */
  username: string;

  /**  */
  nickname: string;

  /**  */
  avatar: string;

  /**  */
  signature: string;

  /**  */
  phone: string;

  /**  */
  isAdmin: boolean;

  /**  */
  blocked: boolean;

  /**  */
  version: number;

  /** 复核时间 */
  reviewTime: Date;
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
  signature: string;

  /**  */
  phone: string;

  /**  */
  isAdmin: boolean;

  /**  */
  blocked: boolean;

  /**  */
  version: number;
}

export interface RecordProperty {
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
  recordId: number;

  /**  */
  key: string;

  /**  */
  label: string;

  /**  */
  value: string;

  /**  */
  index: number;

  /**  */
  recordVersion: number;
}

export interface ReviewRequest {
  /** 复核结论 */
  action: EnumReviewRequestAction;

  /** 备注 */
  remark: string;
}

export interface RecordDevice {
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
  recordId: number;

  /**  */
  deviceId: number;

  /**  */
  deviceNo: string;

  /**  */
  deviceName: string;
}

export interface RecordVo {
  /**  */
  id: number;

  /**  */
  formDefinition: FormDefinitionVo;

  /**  */
  formName: string;

  /**  */
  formNo: string;

  /**  */
  recordNo: string;

  /**  */
  projectName: string;

  /**  */
  sampleInfo: string;

  /**  */
  inspectDate: string;

  /**  */
  testConditions: string;

  /**  */
  tabulatingDate: string;

  /**  */
  testBasis: string;

  /**  */
  judgmentBasis: string;

  /**  */
  additional: string;

  /**  */
  status: string;

  /** 创建人 */
  inspectorcreatedBy: number;

  /** 创建人 */
  inspectorlastModifiedBy: number;

  /** 创建时间 */
  inspectorcreatedDate: Date;

  /** 更新时间 */
  inspectorlastModifiedDate: Date;

  /**  */
  inspectorid: number;

  /**  */
  inspectorusername: string;

  /**  */
  inspectornickname: string;

  /**  */
  inspectoravatar: string;

  /**  */
  inspectorsignature: string;

  /**  */
  inspectorphone: string;

  /**  */
  inspectorisAdmin: boolean;

  /**  */
  inspectorblocked: boolean;

  /**  */
  inspectorversion: number;

  /** 创建人 */
  recordercreatedBy: number;

  /** 创建人 */
  recorderlastModifiedBy: number;

  /** 创建时间 */
  recordercreatedDate: Date;

  /** 更新时间 */
  recorderlastModifiedDate: Date;

  /**  */
  recorderid: number;

  /**  */
  recorderusername: string;

  /**  */
  recordernickname: string;

  /**  */
  recorderavatar: string;

  /**  */
  recordersignature: string;

  /**  */
  recorderphone: string;

  /**  */
  recorderisAdmin: boolean;

  /**  */
  recorderblocked: boolean;

  /**  */
  recorderversion: number;

  /** 创建人 */
  reviewercreatedBy: number;

  /** 创建人 */
  reviewerlastModifiedBy: number;

  /** 创建时间 */
  reviewercreatedDate: Date;

  /** 更新时间 */
  reviewerlastModifiedDate: Date;

  /**  */
  reviewerid: number;

  /**  */
  reviewerusername: string;

  /**  */
  reviewernickname: string;

  /**  */
  revieweravatar: string;

  /**  */
  reviewersignature: string;

  /**  */
  reviewerphone: string;

  /**  */
  reviewerisAdmin: boolean;

  /**  */
  reviewerblocked: boolean;

  /**  */
  reviewerversion: number;

  /** 创建人 */
  submittercreatedBy: number;

  /** 创建人 */
  submitterlastModifiedBy: number;

  /** 创建时间 */
  submittercreatedDate: Date;

  /** 更新时间 */
  submitterlastModifiedDate: Date;

  /**  */
  submitterid: number;

  /**  */
  submitterusername: string;

  /**  */
  submitternickname: string;

  /**  */
  submitteravatar: string;

  /**  */
  submittersignature: string;

  /**  */
  submitterphone: string;

  /**  */
  submitterisAdmin: boolean;

  /**  */
  submitterblocked: boolean;

  /**  */
  submitterversion: number;

  /**  */
  reviewTime: Date;

  /**  */
  submitTime: Date;

  /**  */
  createdDate: Date;

  /**  */
  properties: RecordProperty[];

  /**  */
  devices: RecordDevice[];
}

export interface PageRecordListVo {
  /**  */
  totalPages: number;

  /**  */
  totalElements: number;

  /**  */
  size: number;

  /**  */
  content: RecordListVo[];

  /**  */
  number: number;

  /**  */
  sort: Sort;

  /**  */
  pageable: Pageable;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}

export interface RecordListVo {
  /**  */
  id: number;

  /**  */
  formName: string;

  /**  */
  formNo: string;

  /**  */
  recordNo: string;

  /**  */
  projectName: string;

  /**  */
  inspectDate: string;

  /**  */
  status: string;

  /** 创建人 */
  inspectorcreatedBy: number;

  /** 创建人 */
  inspectorlastModifiedBy: number;

  /** 创建时间 */
  inspectorcreatedDate: Date;

  /** 更新时间 */
  inspectorlastModifiedDate: Date;

  /**  */
  inspectorid: number;

  /**  */
  inspectorusername: string;

  /**  */
  inspectornickname: string;

  /**  */
  inspectoravatar: string;

  /**  */
  inspectorsignature: string;

  /**  */
  inspectorphone: string;

  /**  */
  inspectorisAdmin: boolean;

  /**  */
  inspectorblocked: boolean;

  /**  */
  inspectorversion: number;

  /** 创建人 */
  recordercreatedBy: number;

  /** 创建人 */
  recorderlastModifiedBy: number;

  /** 创建时间 */
  recordercreatedDate: Date;

  /** 更新时间 */
  recorderlastModifiedDate: Date;

  /**  */
  recorderid: number;

  /**  */
  recorderusername: string;

  /**  */
  recordernickname: string;

  /**  */
  recorderavatar: string;

  /**  */
  recordersignature: string;

  /**  */
  recorderphone: string;

  /**  */
  recorderisAdmin: boolean;

  /**  */
  recorderblocked: boolean;

  /**  */
  recorderversion: number;

  /** 创建人 */
  reviewercreatedBy: number;

  /** 创建人 */
  reviewerlastModifiedBy: number;

  /** 创建时间 */
  reviewercreatedDate: Date;

  /** 更新时间 */
  reviewerlastModifiedDate: Date;

  /**  */
  reviewerid: number;

  /**  */
  reviewerusername: string;

  /**  */
  reviewernickname: string;

  /**  */
  revieweravatar: string;

  /**  */
  reviewersignature: string;

  /**  */
  reviewerphone: string;

  /**  */
  reviewerisAdmin: boolean;

  /**  */
  reviewerblocked: boolean;

  /**  */
  reviewerversion: number;

  /** 创建人 */
  submittercreatedBy: number;

  /** 创建人 */
  submitterlastModifiedBy: number;

  /** 创建时间 */
  submittercreatedDate: Date;

  /** 更新时间 */
  submitterlastModifiedDate: Date;

  /**  */
  submitterid: number;

  /**  */
  submitterusername: string;

  /**  */
  submitternickname: string;

  /**  */
  submitteravatar: string;

  /**  */
  submittersignature: string;

  /**  */
  submitterphone: string;

  /**  */
  submitterisAdmin: boolean;

  /**  */
  submitterblocked: boolean;

  /**  */
  submitterversion: number;

  /**  */
  reviewTime: Date;

  /**  */
  submitTime: Date;

  /**  */
  createdDate: Date;
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
  deletedTime: number;

  /**  */
  version: number;
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
  pageable: Pageable;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

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
  pageable: Pageable;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
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
  pageable: Pageable;

  /**  */
  numberOfElements: number;

  /**  */
  first: boolean;

  /**  */
  last: boolean;

  /**  */
  empty: boolean;
}
export enum EnumFormDefinitionRootType {
  'ARRAY' = 'ARRAY',
  'OBJECT' = 'OBJECT',
  'VARCHAR' = 'VARCHAR',
  'TEXT' = 'TEXT',
  'NUMBER' = 'NUMBER',
  'DATE' = 'DATE',
  'DATETIME' = 'DATETIME',
  'TIME' = 'TIME',
  'MULTI_SELECT' = 'MULTI_SELECT',
  'SELECT' = 'SELECT',
  'IMAGE' = 'IMAGE'
}
export enum EnumFieldDefinitionType {
  'ARRAY' = 'ARRAY',
  'OBJECT' = 'OBJECT',
  'VARCHAR' = 'VARCHAR',
  'TEXT' = 'TEXT',
  'NUMBER' = 'NUMBER',
  'DATE' = 'DATE',
  'DATETIME' = 'DATETIME',
  'TIME' = 'TIME',
  'MULTI_SELECT' = 'MULTI_SELECT',
  'SELECT' = 'SELECT',
  'IMAGE' = 'IMAGE'
}
export enum EnumFieldDefinitionVoType {
  'ARRAY' = 'ARRAY',
  'OBJECT' = 'OBJECT',
  'VARCHAR' = 'VARCHAR',
  'TEXT' = 'TEXT',
  'NUMBER' = 'NUMBER',
  'DATE' = 'DATE',
  'DATETIME' = 'DATETIME',
  'TIME' = 'TIME',
  'MULTI_SELECT' = 'MULTI_SELECT',
  'SELECT' = 'SELECT',
  'IMAGE' = 'IMAGE'
}
export enum EnumFormDefinitionVoRootType {
  'ARRAY' = 'ARRAY',
  'OBJECT' = 'OBJECT',
  'VARCHAR' = 'VARCHAR',
  'TEXT' = 'TEXT',
  'NUMBER' = 'NUMBER',
  'DATE' = 'DATE',
  'DATETIME' = 'DATETIME',
  'TIME' = 'TIME',
  'MULTI_SELECT' = 'MULTI_SELECT',
  'SELECT' = 'SELECT',
  'IMAGE' = 'IMAGE'
}
export enum EnumFieldDefinitionRequestType {
  'ARRAY' = 'ARRAY',
  'OBJECT' = 'OBJECT',
  'VARCHAR' = 'VARCHAR',
  'TEXT' = 'TEXT',
  'NUMBER' = 'NUMBER',
  'DATE' = 'DATE',
  'DATETIME' = 'DATETIME',
  'TIME' = 'TIME',
  'MULTI_SELECT' = 'MULTI_SELECT',
  'SELECT' = 'SELECT',
  'IMAGE' = 'IMAGE'
}
export enum EnumRecordStatus {
  'CREATED' = 'CREATED',
  'SUBMITTED' = 'SUBMITTED',
  'CONFIRMED' = 'CONFIRMED',
  'REJECTED' = 'REJECTED'
}
export enum EnumRecordReviewLogVoAction {
  'PASS' = 'PASS',
  'REJECT' = 'REJECT'
}
export enum EnumReviewRequestAction {
  'PASS' = 'PASS',
  'REJECT' = 'REJECT'
}
export enum EnumResourceType {
  'MENU' = 'MENU',
  'BUTTON' = 'BUTTON'
}
