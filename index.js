const { codegen } = require('swagger-axios-codegen')

codegen({
  methodNameMode: 'operationId',
  remoteUrl: 'http://222.128.10.85:6600/v3/api-docs',
  outputDir: './service',
  enumNamePrefix: 'Enum',
  methodNameMode: 'path',
  useStaticMethod: true,
  multipleFileMode: true,
  modelMode: 'interface',
  useCustomerRequestInstance: true,
  useClassTransformer: false,
})
