var RecordStore = require( "./src/record_store/record_store.js" )
var Record = require( "./src/record_store/record.js" )
var RecordCollector = require( "./src/record_store/record_collector.js" )
var SampleRecords = require( "./src/sample.json" );

window.onload = function() {
  console.log( "Webpack record store app", recordStore );

  var recordStore = new RecordStore();

  var storedRecords = JSON.parse(localStorage.getItem("storedRecords")) || SampleRecords;

  for ( record of storedRecords ) {
    recordStore.addRecord( new Record( record ) );
  }

  var recordStoreViewer = new RecordStoreViewer( recordStore );
  recordStoreViewer.render( recordStore );

}