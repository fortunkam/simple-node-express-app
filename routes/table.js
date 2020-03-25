var express = require('express');
var router = express.Router();
var azure = require('azure-storage');
var Enumerable = require('linq');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var tableService = azure.createTableService(process.env.STORAGE_ACCOUNT, process.env.STORAGE_KEY);
  var query = new azure.TableQuery().top(1);

  tableService.queryEntities(process.env.TABLE_NAME, query, null, function(error, result, response) {
    if (!error) {
      // result.entries contains entities matching the query      
      var tableData = Enumerable
        .from(result.entries)
        .select((val,i)=> ({ PartitionKey:val.PartitionKey['_'], RowKey:val.RowKey['_'], Content:val.Content['_'] }))
        .toArray();
      res.render('table', { tableData: tableData, tableName: process.env.TABLE_NAME, error: '' });
    }
    else{
      res.render('table', { tableData: [], tableName: process.env.TABLE_NAME, error: error });
    }
  });

  
});

module.exports = router;
