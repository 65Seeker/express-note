require('../../less/index.less');
var $=require('../lib/jquery-3.2.1.min.js');
var NoteManager = require('../mod/note-manager.js').NoteManager;
var Event = require('../mod/event.js');
var WaterFall = require('../mod/waterfall.js');
var Toast =require('../mod/toast.js');
NoteManager.load();

$('.add-note').on('click', function() {
  NoteManager.add();
})

Event.on('waterfall', function(){
  WaterFall.init($('#content'));
})

Toast('hello world')