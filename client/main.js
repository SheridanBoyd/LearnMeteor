import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { markdown } from 'meteor/markdown';
import nearley from 'nearley';
import grammar from '../include/CHARSgrammar.js';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  //this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
   // return Template.instance().counter.get();
   numClicks = Clicks.findOne({'_id': 'onlydoc'});
   return numClicks.clicks
 },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    numClicks = Clicks.findOne({'_id': 'onlydoc'});
    Clicks.update({'_id': 'onlydoc'},{'clicks': numClicks.clicks + 1});
  }
});


Template.mde.events({
 'input textarea'(event, instance) {
   text = $('#markdown').val()
   markdowntext = MarkdownText.findOne({'_id': 'onlydoc'});
   MarkdownText.update({'_id': 'onlydoc'},{'text': text});
   console.log("it works :)",$('#markdown').val(),markdowntext);
 }
});


Template.mde.helpers({
  markdowntext() {   
    console.log("mde helpers 1")
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
    console.log("mde helpers 2")
    markdowntext = MarkdownText.findOne({'_id': 'onlydoc'});
    console.log("mde helpers 3", markdowntext.text)
    parser.feed(markdowntext.text)
    console.log("mde helpers 4")
    scodetext = parser.results
    console.log("mde helpers 5")
    console.log("markdown stuff",markdowntext.text, scodetext)
    return scodetext;
  }
});
// ##################################### TEXT ADVENTURE STUFF #################################
Template.Tadventure.onCreated(function AdventureOnCreated() {
  this.croom = new ReactiveVar('start');
});

Template.Tadventure.events({
 'input #editname'(event, instance) {
   currentroom = Template.instance().croom.get();
   room = TextAdventure.findOne({'_id': currentroom});
   console.log(currentroom);
   newname = $('#editname').val();
   newdesc = room.description;
   TextAdventure.update({'_id': currentroom}, {'name': newname, 'description': newdesc});
 },
 'input #editdesc'(event, instance) {
   currentroom = Template.instance().croom.get()
   room = TextAdventure.findOne({'_id': currentroom});
   console.log(currentroom)
   newname = room.name
   newdesc = $('#editdesc').val();
  // console.log("please work",newname,newdesc,$('#editname').val(),$('#editdesc').val())
  TextAdventure.update({'_id': currentroom}, {'name': newname, 'description': newdesc});
},
'click #delete'(event, instance) {
  currentroom = Template.instance().croom.get();
  if (currentroom != 'start') {
    TextAdventure.remove({'_id': currentroom});
    Template.instance().croom.set('start')
  } else {
    console.log('Whatis wrong with you? Why are you trying to delete the start room?!?!?!?')
  };
},
'click .game'(event, instance) {
  console.log('DHSFAJHDSFJKAHDSFJKSADH',instance,event,event.target.id);
  Template.instance().croom.set(event.target.id);
  currentroom = Template.instance().croom.get();
  room = TextAdventure.findOne({'_id': currentroom});
  if (!room) {
    TextAdventure.insert({'_id': currentroom, 'name': currentroom, 'description': 'You are in a new room'});
  }
},
});

Template.Tadventure.helpers({
  name() {
   // return Template.instance().counter.get();
   currentroom = Template.instance().croom.get()
   adventure = TextAdventure.findOne({'_id': currentroom});
   return adventure.name
 },
 description() {
   // return Template.instance().counter.get();
   currentroom = Template.instance().croom.get()
   adventure = TextAdventure.findOne({'_id': currentroom});
   return adventure.description
 },
 scodedescription() {
  parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  currentroom = Template.instance().croom.get()
  adventure = TextAdventure.findOne({'_id': currentroom});
  parser.feed(adventure.description)    
  scodetext = String(parser.results)
  return scodetext
  },
});