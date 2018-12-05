const { getGraphQLBuilders ,getMutationBuilders} = require('./util');
const { types, queryType,mutationType,subscriptionType} = require('./schema.json').data.__schema;

const builders0 = getGraphQLBuilders({
  types,
  rootName: queryType.name,
  ignoredFields: [],
  type: 'query'
});

const builders1 = getMutationBuilders({
  types,
  rootName: mutationType.name,
  ignoredFields: []
  //type: 'mutation'
});
// const builders2 = getGraphQLBuilders({
//   types,
//   rootName: subscriptionType.name,
//   ignoredFields: [],
//   type: 'subscription'
// });

var barry = [builders0,builders1]
const mdfile = []
barry.forEach(builders => {
  Object.keys(builders).forEach(key => {
    const builder = builders[key];
    const args = builder.args;
    const argValues = Object.values(args)
//      .filter(x => x.type.kind === 'NON_NULL')
      .reduce((obj, x) => {
        // if (x.name === 'paging') {
          // obj.paging = paging;
        // } else {      
          obj[x.name] = '$'+x.name;//x.type.ofType.name
        // }
        return obj;
      }, {});
    const argValues_fix = Object.values(args)
//      .filter(x => x.type.kind === 'NON_NULL')
      .reduce((obj, x) => {
        // if (x.name === 'paging') {
          // obj.paging = paging;
        // } else {      
          obj[x.name] =  x.type.kind === 'NON_NULL' ? x.type.ofType.name+'!':x.name;
        // }
        return obj;
      }, {});
    const lines = [];
    const query = builder(argValues, argValues_fix);
    mdfile.push(`#### ${key}`);
    mdfile.push('\n```graphql');
    lines.push(query);
    mdfile.push(query)
    mdfile.push('\n```')
    require('fs').writeFileSync('./output/'+key+'.graphql', lines.join('\n'));
  });  
  require('fs').writeFileSync('./output/output.md', mdfile.join('\n'));
}
)

