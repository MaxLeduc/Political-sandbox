//Pseudocode!!!!!!!!

//

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){var b="1.7.2",c={},d={exclude:[],excludeWithin:[],offset:0,direction:"top",delegateSelector:null,scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},e=function(b){var c=[],d=!1,e=b.dir&&"left"===b.dir?"scrollLeft":"scrollTop";return this.each(function(){var b=a(this);if(this!==document&&this!==window)return!document.scrollingElement||this!==document.documentElement&&this!==document.body?void(b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))):(c.push(document.scrollingElement),!1)}),c.length||this.each(function(){this===document.documentElement&&"smooth"===a(this).css("scrollBehavior")&&(c=[this]),c.length||"BODY"!==this.nodeName||(c=[this])}),"first"===b.el&&c.length>1&&(c=[c[0]]),c};a.fn.extend({scrollable:function(a){var b=e.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=e.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(b,c){if(b=b||{},"options"===b)return c?this.each(function(){var b=a(this),d=a.extend(b.data("ssOpts")||{},c);a(this).data("ssOpts",d)}):this.first().data("ssOpts");var d=a.extend({},a.fn.smoothScroll.defaults,b),e=function(b){var c=function(a){return a.replace(/(:|\.|\/)/g,"\\$1")},e=this,f=a(this),g=a.extend({},d,f.data("ssOpts")||{}),h=d.exclude,i=g.excludeWithin,j=0,k=0,l=!0,m={},n=a.smoothScroll.filterPath(location.pathname),o=a.smoothScroll.filterPath(e.pathname),p=location.hostname===e.hostname||!e.hostname,q=g.scrollTarget||o===n,r=c(e.hash);if(r&&!a(r).length&&(l=!1),g.scrollTarget||p&&q&&r){for(;l&&j<h.length;)f.is(c(h[j++]))&&(l=!1);for(;l&&k<i.length;)f.closest(i[k++]).length&&(l=!1)}else l=!1;l&&(g.preventDefault&&b.preventDefault(),a.extend(m,g,{scrollTarget:g.scrollTarget||r,link:e}),a.smoothScroll(m))};return null!==b.delegateSelector?this.undelegate(b.delegateSelector,"click.smoothscroll").delegate(b.delegateSelector,"click.smoothscroll",e):this.unbind("click.smoothscroll").bind("click.smoothscroll",e),this}}),a.smoothScroll=function(b,d){if("options"===b&&"object"==typeof d)return a.extend(c,d);var e,f,g,h,i,j=0,k="offset",l="scrollTop",m={},n={};"number"==typeof b?(e=a.extend({link:null},a.fn.smoothScroll.defaults,c),g=b):(e=a.extend({link:null},a.fn.smoothScroll.defaults,b||{},c),e.scrollElement&&(k="position","static"===e.scrollElement.css("position")&&e.scrollElement.css("position","relative"))),l="left"===e.direction?"scrollLeft":l,e.scrollElement?(f=e.scrollElement,/^(?:HTML|BODY)$/.test(f[0].nodeName)||(j=f[l]())):f=a("html, body").firstScrollable(e.direction),e.beforeScroll.call(f,e),g="number"==typeof b?b:d||a(e.scrollTarget)[k]()&&a(e.scrollTarget)[k]()[e.direction]||0,m[l]=g+j+e.offset,h=e.speed,"auto"===h&&(i=Math.abs(m[l]-f[l]()),h=i/e.autoCoefficient),n={duration:h,easing:e.easing,complete:function(){e.afterScroll.call(e.link,e)}},e.step&&(n.step=e.step),f.length?f.stop().animate(m,n):e.afterScroll.call(e.link,e)},a.smoothScroll.version=b,a.smoothScroll.filterPath=function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=d});

$(function() {
	var regime = {
		repressionYes: {
			powerMany:[
				{
					title:"Semi-Democracy",
					rotation: "rotationYes",
					tagline: "We all get to play, but it sometimes gets messy.",
					description: '"The term "semi-democratic" is reserved for stable regimes that combine democratic and authoritarian elements. Most of them are dominant-party systems—that is, states where opposition parties are allowed and free elections are held. Sometimes the dominant party maintains power through election fraud, while other times the elections themselves are fair, but the electoral campaigns preceding them are not." (Wikipedia)',
					readMore: 'https://en.wikipedia.org/wiki/Semi-democracy',
					image: "url(https://cdn0.vox-cdn.com/thumbor/3Cs9YY2cEC8QWWy5dNtPdK4wDqY=/cdn0.vox-cdn.com/uploads/chorus_asset/file/3823294/putin.0.jpg)",
					imageLink:"https://cdn0.vox-cdn.com/thumbor/3Cs9YY2cEC8QWWy5dNtPdK4wDqY=/cdn0.vox-cdn.com/uploads/chorus_asset/file/3823294/putin.0.jpg"
				},
				{
					title:"Socialist State",
					rotation: "rotationNo",
					tagline: "All kids are equal, but some kids are more equal than others.",
					description: '"A socialist state or socialist republic (sometimes Workers\' State) refers to any state that is constitutionally dedicated to the establishment of socialism. In Western usage, the term "Communist state" is often used in reference to single-party socialist states governed by parties adhering to a variant of Marxist-Leninism; however these states officially refer to themselves as \"socialist states\"". (Wikipedia)',
					readMore: "https://en.wikipedia.org/wiki/Socialist_state",
					image: "url(https://i.ytimg.com/vi/-5pBZz1l2Ac/maxresdefault.jpg)",
					imageLink:"https://i.ytimg.com/vi/-5pBZz1l2Ac/maxresdefault.jpg"
				}
			],
			powerFew:[
				{
					title:"Oligarchy",
					rotation: "rotationYes",
					tagline: "You and your exclusive group of friend control the sandbox.",
					description: '"Oligarchy is a form of power structure in which power effectively rests with a small number of people. Such states are often controlled by a few prominent families who typically pass their influence from one generation to the next, but inheritance is not a necessary condition for the application of this term. (Wikipedia)"',
					readMore: "https://en.wikipedia.org/wiki/Oligarchy",
					image: "url(http://www.nybooks.com/wp-content/uploads/2014/11/Senate-Bosses.jpg)",
					imageLink:"http://www.nybooks.com/wp-content/uploads/2014/11/Senate-Bosses.jpg"

				},
				{
					title:"Authoritarianism",
					rotation:"rotationNo",
					tagline: "You have ultimate power over the sandbox.",
					description: '"In government, authoritarianism denotes any political system that concentrates power in the hands of a leader or a small elite that is not constitutionally responsible to the body of the people. Authoritarian leaders often exercise power arbitrarily and without regard to existing bodies of law, and they usually cannot be replaced by citizens choosing freely among various competitors in elections." (Encyclopædia Britannica, Inc.)',
					readMore: "http://www.britannica.com/topic/authoritarianism",
					image: "url(http://www.toledoblade.com/image/2011/06/08/800x_b1_cCM_z/7b373a6f-6bf1-45fb-8987-9f21afeeb88a.jpg)",
					imageLink:"http://www.toledoblade.com/image/2011/06/08/800x_b1_cCM_z/7b373a6f-6bf1-45fb-8987-9f21afeeb88a.jpg"
				},
			],
		},
		repressionNo: {
			powerMany:[
				{
					title:"Democracy",
					rotation:"rotationYes",
					tagline: "The other kids elected you Prime Minister of the sandbox!",
					description: '"Democracy, or democratic government, is "a system of government in which all the people of a state or polity ... are involved in making decisions about its affairs, typically by voting to elect representatives to a parliament or similar assembly," as defined by the Oxford English Dictionary." (Wikipedia)',
					readMore: "https://en.wikipedia.org/wiki/Democracy",
					image: "url(http://ell.h-cdn.co/assets/15/43/1600x800/landscape-1445378013-justin-trudeau.jpg)",
					imageLink:"http://ell.h-cdn.co/assets/15/43/1600x800/landscape-1445378013-justin-trudeau.jpg"

				},
				{
					title:"Communist Society (hypothetical)",
					rotation:"rotationNo",
					tagline: "Everyone shares everything all the time.",
					description: '"A communist society is characterized by common ownership of the means of production with free access to the articles of consumption and is classless and stateless, implying the end of the exploitation of labor." (Wikipedia)',
					readMore: "https://en.wikipedia.org/wiki/Communist_society",
					image: "url(https://img0.etsystatic.com/034/0/9573226/il_570xN.609822658_m87r.jpg)",
					imageLink:"https://img0.etsystatic.com/034/0/9573226/il_570xN.609822658_m87r.jpg"

				},
			],
			powerFew:[
				{
					title:"Plutocracy",
					rotation:"rotationYes",
					tagline: "Only you and your most wealthy friends take turns playing in the sandbox.",
					description: '"Plutocracy is a form of oligarchy and defines a society ruled or controlled by the small minority of the wealthiest citizens." (Wikipedia)',
					readMore: "https://en.wikipedia.org/wiki/Plutocracy",
					image: "url(http://budgetsaresexy.com/images/monopoly-man-cash1.jpg)",
					imageLink:"http://budgetsaresexy.com/images/monopoly-man-cash1.jpg"
				},
				{
					title:"Aristocracy",
					rotation:"rotationNo",
					tagline: "You and your exclusive group of friend control all the sandbox, but for the  well being of everyone!",
					description: '"Aristocracy is a form of government that places power in the hands of a small, privileged ruling class. The term derives from the Greek aristokratia, meaning \"rule of the best\". At the time of the word\'s origins in Ancient Greece, the Greeks conceived it as rule by the best qualified citizens—and often contrasted it favourably with monarchy, rule by an individual." (Wikipedia)',
					readMore: "https://en.wikipedia.org/wiki/Aristocracy",
					image: "url(http://1.bp.blogspot.com/--6Q_mdPOLgA/TZORpHKZNNI/AAAAAAAAAdo/zwFT0iGw02c/s1600/Pericles.jpg)",
					imageLink:"http://1.bp.blogspot.com/--6Q_mdPOLgA/TZORpHKZNNI/AAAAAAAAAdo/zwFT0iGw02c/s1600/Pericles.jpg"

				},
			],
		},
	};

	$('#results').on("click", function(){
		$("form").trigger("submit");
		console.log("submitting");
	});

	// we the user submits the form, we want something to happen
	$("form").on("submit", function(e){
		e.preventDefault();
	// gather the selected information from the user

		var repressionChoice = $("input[name=repression]:checked").val();

		// console.log(repressionChoice);

		var powerChoice = $("input[name=power]:checked").val();

		// console.log(powerChoice);

		var rotationChoice = $("input[name=rotation]:checked").val();

		// console.log(rotationChoice);
	// based on the selections, determine which regime corresponds.

		var objectRepression = regime[repressionChoice];

		// console.log(objectRepression);

		var arrayPower = objectRepression[powerChoice];

		// console.log(arrayPower);

		for(var i = 0; i < arrayPower.length; i = i +1){
			var regimeChoice = arrayPower[i].title;
			var arrayNumber = i;
			if(arrayPower[i].rotation === rotationChoice){
				// console.log(arrayNumber);
				// console.log(regimeChoice);
				console.log(arrayPower[arrayNumber].image);

				$(".regime-image").css("background-image", arrayPower[arrayNumber].image);

				$(".regime-image-link").attr("href", arrayPower[arrayNumber].imageLink);

				$(".regime-description h4").html("<span>" + regimeChoice + "</span>");

				$(".regime-description h6").html('"' + arrayPower[arrayNumber].tagline + '"');

				$(".regime-description p").html(arrayPower[arrayNumber].description);

				$("#read-more").attr("href", arrayPower[arrayNumber].readMore);

				$(".content").css("visibility", "visible")

			}
		};
	// render the regime and its information on screen.
	});//this is where our quiz function ends

	$("label").on('click', function() {
		$(this).parent().children().removeClass('redFill greenFill');
		var selection = $(this).attr('class');
		console.log(selection);
		if (selection === "repressionYes" || selection === "powerFew" || selection === "rotationNo"){
			$(this).addClass("redFill");
		} else if (selection === "repressionNo" || selection === "powerMany" || selection === "rotationYes"){
			$(this).addClass("greenFill");
		}
	});

	$("a").smoothScroll({
		speed:"auto"
	});

	$(".reset").on("click", function(){
		$('input[name="repression"]').prop('checked', false);
		$('input[name="power"]').prop('checked', false);
		$('input[name="rotation"]').prop('checked', false);
		$("label").removeClass('redFill greenFill');
		$(".content").css("visibility", "hidden");
		console.log("work");
	});//reset button ends

	//we want to check the radio button when the actual button is clicked
});
