const { getQueryBuilders } = require('@arcblock/sdk-util/lib/util');
const { types, queryType } = require('./schema.json');

const builders = getQueryBuilders({
  types,
  rootName: queryType.name,
  ignoredFields: [],
});

const lines = [];
Object.keys(builders).forEach(key => {
  const builder = builders[key];
  const args = builder.args;
  const argValues = Object.values(args)
    .filter(x => x.type.kind === 'NON_NULL')
    .reduce((obj, x) => {
      if (x.name === 'paging') {
        obj.paging = paging;
      } else {
        obj[x.name] = x.type.ofType.name.indexOf('String') > -1 ? 'abc' : 123;
      }

      return obj;
    }, {});

  const query = builder(argValues);
//  lines.push(`## ${key}`);
//  lines.push('\n```graphql');
  lines.push(query);
//  lines.push('```');
});

require('fs').writeFileSync('./output.md', lines.join('\n'));