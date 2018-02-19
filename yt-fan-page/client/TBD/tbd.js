import { Template } from 'meteor/templating';
import { Videos } from '../../collections/videos.js';

Template.tbd.events({
    'click #wow': function(event, template){
        console.log(this);
        console.log(Videos);
        Videos.insert(
            {
                name: $("#name").val(), 
                URL: $("#url").val(), 
                desc: $("#desc").val() 
        });
    }
});
