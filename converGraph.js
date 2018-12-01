const { getGraphQLBuilders } = require('./util');
const { types, queryType,mutationType,subscriptionType} = require('./schema.json');

const builders0 = getGraphQLBuilders({
  types,
  rootName: queryType.name,
  ignoredFields: [],
  type: 'query'
});

const builders1 = getGraphQLBuilders({
  types,
  rootName: mutationType.name,
  ignoredFields: [],
  type: 'mutation'
});
// const builders2 = getGraphQLBuilders({
//   types,
//   rootName: subscriptionType.name,
//   ignoredFields: [],
//   type: 'subscription'
// });

var barry = [builders0]
const lines = [];
barry.forEach(builders => {
  Object.keys(builders).forEach(key => {
    const builder = builders[key];
    const args = builder.args;
    const argValues = Object.values(args)
      .filter(x => x.type.kind === 'NON_NULL')
      .reduce((obj, x) => {
        if (x.name === 'paging') {
          obj.paging = paging;
        } else {      
          obj[x.name] = '$'+x.name;//x.type.ofType.name
        }
        return obj;
      }, {});
    const argValues_fix = Object.values(args)
      .filter(x => x.type.kind === 'NON_NULL')
      .reduce((obj, x) => {
        if (x.name === 'paging') {
          obj.paging = paging;
        } else {      
          obj[x.name] = x.type.ofType.name + (x.type.kind === 'NON_NULL' ? '!':'');
          x.name = '$'+x.name
        }
        return obj;
      }, {});
    
    const query = builder(argValues, argValues_fix);
    lines.push(query);
  });  
}
)

require('fs').writeFileSync('./output.md', lines.join('\n'));