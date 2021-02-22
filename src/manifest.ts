'use strict';

import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import loadJsonFile from 'load-json-file';
import { compact } from 'lodash';
import path from 'path';

const pack = (loadJsonFile as any).sync(path.join(__dirname, '../package.json'));

export default compact([
  {
    plugin: HapiSwagger,
    options: {
      info: {
        title: 'Weather HTTP API',
        description: 'API for weather client application',
        version: pack.version
      },
      basePath: '/',
      pathPrefixSize: 2,
      jsonPath: '/docs/swagger.json',
      sortPaths: 'path-method',
      tags: [
        { name: 'api' }
      ],
      expanded: 'none',
      documentationPath: '/docs'
    }
  },
  Inert,
  Vision
]);
