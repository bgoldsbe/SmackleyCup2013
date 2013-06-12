var BE = (function(){
  "use strict";
  return {
    namespace: function(name) {
      if(this[name] === undefined) {
        this[name] = {};
      }
      if(typeof this[name] !== 'object') {
        throw "Namespace '"+name+"' was already defined and is not an Object";
      }
      return this[name];
    }
  };
})(jQuery);

BE.namespace('Frontend').trashTalk = (function($){
	
	//var data = [{"priority":0,"text":"Can you to slide that an RCH?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/23.json"},{"priority":0,"text":"Smoothie time?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16609.json"},{"priority":0,"text":"This dude’s day rate is 20k and this is the footage he left us to work with?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16620.json"},{"priority":0,"text":"It's more like.... BWAAAAHHHH.... Gunga gunga, DING.","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16613.json"},{"priority":0,"text":"We need to put a QR code on the end frame.","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16617.json"},{"priority":0,"text":"I know it’s early, but what are we getting for lunch?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/4.json"},{"priority":0,"text":"Did we use the best take on that close up? I’m sure you did...but can we look through some more takes?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16618.json"},{"priority":0,"text":"I know we’ve talked about this 10 times already, but can we revisit the opening sequence?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16615.json"},{"priority":0,"text":"Could you play that back again? I wasn’t paying attention.","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/20.json"},{"priority":0,"text":"This is to time, right?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16608.json"},{"priority":0,"text":"Is everybody feelin’ it? I'm not feelin’ it.","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16612.json"},{"priority":0,"text":"Is that gonna be the real music?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/12.json"},{"priority":0,"text":"Are you sure these are the takes we marked?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16625.json"},{"priority":0,"text":"It’s not sexy enough. ","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16632.json"},{"priority":0,"text":"This might suck, but can we just try this one thing?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/19.json"},{"priority":0,"text":"We’re going to take the timecode off, right?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/17.json"},{"priority":0,"text":"Let me see A again...now B.","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16622.json"},{"priority":0,"text":"That’s a good start. I just have a few small comments.","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16623.json"},{"priority":0,"text":"So I was playing around with the cuts in iMovie last night...","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/11.json"},{"priority":0,"text":"Can we maybe try a ‘non-linear’ version?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/16.json"},{"priority":0,"text":"Anyone else think it feels kinda cutty?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/1.json"},{"priority":0,"text":"Sorry for breaking your glass table.\r\n","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16601.json"},{"priority":0,"text":"I didn’t design that art card. I’ve never seen that before.","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16627.json"},{"priority":0,"text":"Can we combine 7b and 11c and then maybe use the of opening 4e?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/3.json"},{"priority":0,"text":"Let’s try one in a Tarantino style.","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16687.json"},{"priority":0,"text":"Let’s just blow up this edit and start over.","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/14.json"},{"priority":0,"text":"Can you get us into a really-hard-to-get-into-restaurant tonight?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16610.json"},{"priority":0,"text":"Are we gonna get to work on my spot today?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16621.json"},{"priority":0,"text":"Is the masseuse coming today?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/5.json"},{"priority":0,"text":"Whatever you think is right. This isn’t even going on my reel.","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16611.json"},{"priority":0,"text":"Can you make her hands look smaller?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16614.json"},{"priority":0,"text":"What if we just split the difference?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/15.json"},{"priority":0,"text":"I was showing these to my girlfriend last night and she thought version 7b_alt ending_dubstep was the funniest.","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/2.json"},{"priority":0,"text":"Maybe it would help if we let it breath a bit….or maybe speed it up?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/6.json"},{"priority":0,"text":"You’ve seen the script, right?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16624.json"},{"priority":0,"text":"One more time let’s take look at all the takes of the guy opening the door.","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/26.json"},{"priority":0,"text":"Could we try some sound effects...maybe something like a woosh to up the humor?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16606.json"},{"priority":0,"text":"Can we get this posted in the next 5 minutes?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/10.json"},{"priority":0,"text":"You guys have any extra tickets to the game laying around here?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/13.json"},{"priority":0,"text":"We love the edit.... BUT....","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16655.json"},{"priority":0,"text":"Could we try some sound effects...maybe something like a space woosh to up the humor?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/24.json"},{"priority":0,"text":"Are you sure you don’t mind going on another coffee run?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16600.json"},{"priority":0,"text":"Did you cut that to the beat on purpose?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/8.json"},{"priority":0,"text":"Sorry, I dozed off. Which version is this again?","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16607.json"},{"priority":0,"text":"What’s her name?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/7.json"},{"priority":0,"text":"Anyone opposed to getting sushi AND burgers?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/22.json"},{"priority":0,"text":"I don’t know what's wrong with it, it’s just wrong. ","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16709.json"},{"priority":0,"text":"That’s not the real VO, is it?","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/25.json"},{"priority":0,"text":"Thanks. I have been thinking about getting my VO reel together.","author_id":1,"state":"approved","url":"http://badeditquette.com/posts/9.json"},{"priority":0,"text":"We should totally try a :90.","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16688.json"},{"priority":0,"text":"Excuse me, Mr. Editor…","author_id":null,"state":"approved","url":"http://badeditquette.com/posts/16619.json"}];

	function init() {

		//var docFrag = document.createDocumentFragment(),
		//	iceEl = document.getElementById('ice');

		//$.get('http://badeditquette.com/posts.json', function(data) {

			//console.log(data);

			//for(var i=0; i<data.length; i++ ){

				//var tmpChi = document.createElement('div'),
					//tmpBos = document.createElement('div');
				
				//tmpChi.innerHTML = '<div class="chi"><p><em class="left">&ldquo;</em>'+data[i]["text"]+'<em>&rdquo;</em></p></div>';
				//docFrag.appendChild(tmpChi.childNodes[0]);
				
				//tmpBos.innerHTML = '<div class="bos"><p><em class="left">&ldquo;</em>'+data[i]["text"]+'<em>&rdquo;</em></p></div>';
				//docFrag.appendChild(tmpBos.childNodes[0]);
			//}
	
			//iceEl.appendChild(docFrag);
			//socialShare.init();
		//});	

	}
	
	return {
		'init' : init
	}

})(jQuery);
