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
   Template.instance().markdowntext.set(text)
   console.log("it works :)",$('#markdown').val(),markdowntext);
 }
});


Template.mde.helpers({
  markdowntext() {
    console.log(Template.instance().markdowntext.get())
    markdowntext = MarkdownText.findOne({'_id': 'onlydoc'});
    return markdowntext.text;
  }
});

Template.mde.onCreated(function lambda() {
  console.log("its created");
  this.markdowntext = new ReactiveVar('#Type here')
  console.log(this.markdowntext);
});