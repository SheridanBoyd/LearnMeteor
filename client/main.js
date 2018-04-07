import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { markdown } from 'meteor/markdown';
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
    markdowntext = MarkdownText.findOne({'_id': 'onlydoc'});
    return markdowntext.text;
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
  'click button'(event, instance) {
    console.log('DHSFAJHDSFJKAHDSFJKSADH',instance,event,event.target.id);
    Template.instance().croom.set(event.target.id);
    currentroom = Template.instance().croom.get();
    room = TextAdventure.findOne({'_id': currentroom});
    if (!room) {
      TextAdventure.insert({'_id': currentroom, 'name': 'New Room', 'description': 'You are in a new room'});
    }
  }
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
});