import { Meteor } from 'meteor/meteor';


Meteor.startup( () => {
  // code to run on server at startup 
  markdowntext = MarkdownText.findOne({'_id': 'onlydoc'});
  if (!markdowntext) {
  	MarkdownText.insert({'_id': 'onlydoc', 'text': '#Type here'})
    markdowntext = MarkdownText.findOne({'_id': 'onlydoc'});
};

  numClicks = Clicks.findOne({'_id': 'onlydoc'});
  console.log('server main.js startup begin numClicks:',numClicks,!numClicks);
  if (!numClicks) {
  	Clicks.insert({'_id': 'onlydoc', 'clicks': 0})
    numClicks = Clicks.findOne({'_id': 'onlydoc'});
    console.log('server main.js startup inside numClicks:',numClicks,!numClicks);
  };
  console.log('server main.js startup end numClicks:',numClicks,!numClicks);
});
