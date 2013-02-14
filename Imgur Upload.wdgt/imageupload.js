var image_url;

var m_ProAnimation = null;
var m_ComUpload = null;

var is_Uploading = false;
var is_Complete = false;

var dashboardOpen = false;

/* Preferences */

function load() {
	if(widget.preferenceForKey("sound") == null){
		widget.setPreferenceForKey("true", "sound");
	}
	if(widget.preferenceForKey("sound") == "false"){
		document.getElementById("soundCheckbox").checked = false;
	}
	m_CrawlAnimation = new CrawliesAnimation(document.getElementById('crawlies'), "images/crawlies/crawl");
	
	window.setTimeout("update();",200);
}

function sound(event)
{
	if(event.target.checked == true){
		widget.setPreferenceForKey("true", "sound")
	}else{
		widget.setPreferenceForKey("false", "sound")
	}
}

function update()
{
	widget.onshow = checkUserInit;
	widget.onhide = widgetHide;
}

function checkUserInit() 
{
	dashboardOpen = true;
}

function widgetHide()
{
	dashboardOpen = false;
}

/* Drag & Drop */

function drag_Drop(event)
{
	if (is_Uploading)
	{
		return;
	}
	event.stopPropagation();
	event.preventDefault();
	Effect.Fade('drop', {duration: .5});
    
    var reader = new FileReader();
    reader.onload = function(e) {
		var image = e.target.result.split(',')[1];
        jQuery.ajax({
            url: 'http://api.imgur.com/2/upload.json',
            type: 'POST',
            data: {
                type: 'base64',
                key: '58584eba731a360f7d0b78c30e5a8d5f',
                name: 'neon.jpg',
                title: 'test title',
                caption: 'test caption',
                image: image
            },
            dataType: 'json'
        }).success(function(data) {
            image_url = data.upload.links.original;
            setTimeout('upload_Init();', 100);
        }).error(function() {
            image_url = 'Could not reach api.imgur.com. Sorry :(';
            setTimeout('upload_Init();', 100);
        });
    }
    reader.readAsDataURL(event.dataTransfer.files[0]);
}

function drag_Enter(event)
{
	if (is_Uploading)
	{
		return;
	}
	event.stopPropagation();
	event.preventDefault();
	Effect.Fade('done', {duration: .0001});
	Effect.Fade('done-container', {duration: .0001});
	document.getElementById('drop-container').style.display = 'block';
	document.getElementById('drop-container').style.opacity = '1';
	Effect.Appear('drop', {duration: .2});
	Effect.Appear('crawlies', {duration: .2});
	m_CrawlAnimation.start();
}

function drag_Over(event)
{
	if (is_Uploading)
	{
		return;
	}
	event.stopPropagation();
	event.preventDefault();
}

function drag_Leave(event)
{
	if (is_Uploading)
	{
		return;
	}
	event.stopPropagation();
	event.preventDefault();
	document.getElementById('drop-container').style.display = 'none';
	document.getElementById('drop-container').style.opacity = '0';
	m_CrawlAnimation.stop();
}

/* Validate Filetype */

function util_validExt(ext)
{
	extarr = new Array('JPEG', 'JPG', 'PNG', 'GIF', 'BMP', 'TIF', 'TIFF', 'SWF');
	for (i = 0; i < extarr.length; i++)
	{
		if (extarr[i].toLowerCase() == ext.toLowerCase())
		{
			return true;
		}
	}
	return false;
}

/* Initiate Upload */

function upload_Init()
{
	Effect.Fade('drop-container', {duration: .5});
	Effect.Fade('crawlies', {duration: .5});
	m_CrawlAnimation.stop();
	Effect.Appear('uploading-container', {duration: .5});
	is_Uploading = true;
	m_ProAnimation = new ProgressIndicator(document.getElementById('async'), "images/async/prog");
	m_ProAnimation.start();
	Effect.Appear('async', {duration: .5});
	var command = './imgur-upload.sh "'+ image_url +'"';
	m_ComUpload = widget.system(command, upload_Done);
}

/* Progress Indicator */

function ProgressIndicator(element, imageBaseURL) {
    this.count = 0;
    this.timer = null;
    this.element = element;
    this.element.style.opacity = "0";
    this.imageBaseURL = imageBaseURL;
}

ProgressIndicator.prototype = {
    start : function () {       
        if (this.timer) clearInterval(this.timer);
        this.tick();
        var localThis = this;
        this.timer = setInterval (function() { localThis.tick() }, 60);
    },

    stop : function () {
        clearInterval(this.timer);
        this.element.style.opacity = "0";
    },

    tick : function () {
        var imageURL = this.imageBaseURL + (this.count + 1) + ".png";
        this.element.src = imageURL;
        this.count = (this.count + 1) % 12;
    }
}

/* Crawlies */

function CrawliesAnimation(element, imageBaseURL) {
    this.count = 0;
    this.timer = null;
    this.element = element;
    this.imageBaseURL = imageBaseURL;
}

CrawliesAnimation.prototype = {
    start : function () {        
        if (this.timer) clearInterval(this.timer);
        this.tick();
        var localThis = this;
        this.timer = setInterval (function() { localThis.tick() }, 20);
    },

    stop : function () {
        clearInterval(this.timer);
    },

    tick : function () {
        var imageURL = this.imageBaseURL + (this.count + 1) + ".png";
        this.element.src = imageURL;
        this.count = (this.count + 1) % 20;
    }
}

/* Upload Complete */

function upload_Done()
{
  is_Uploading = false;
  Effect.Fade('drop', {duration: .00001});
	Effect.Fade('crawlies', {duration: .00001});
	window.setTimeout('completion_Feedback()',10);
}

function completion_Feedback()
{
	if(widget.preferenceForKey("sound") == "true"){
		widget.system("./audio/play audio/complete.m4a",done);
	}

	str_FileNameExt = null;
	Effect.Fade('drop', {duration: .00001});
	Effect.Fade('crawlies', {duration: .00001});
	Effect.Fade('async', {duration: .5});
	m_ProAnimation.stop();
    Effect.Fade('uploading-container', {duration: .5});
    Effect.Appear('done-container', {duration: .5});
    Effect.Appear('done', {duration: .5});
    Effect.Fade('drop', {duration: .00001});
    Effect.Fade('crawlies', {duration: .00001});
    window.setTimeout('repeat_Preparation()',.5); 
}

/* Preparation */

function repeat_Preparation()
{
	if (is_Uploading)
	{
		return;
	} else {
		Effect.Fade('done', {duration: .5});
		Effect.Fade('done-container', {duration: .5});
		Effect.Appear('drop', {duration: .5});
		Effect.Appear('crawlies', {duration: .2});
		is_Complete = false;
	}
}

/* Back/Front Transition */

function showBack()
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");
    if (window.widget)
        widget.prepareForTransition("ToBack");
    front.style.display="none";
    back.style.display="block";
    if (window.widget)
        setTimeout ('widget.performTransition();', 0);  
}

function showFront()
{
	var front = document.getElementById("front");
	var back = document.getElementById("back");
	if (window.widget)
		widget.prepareForTransition("ToFront");
	back.style.display="none";
	front.style.display="block";
	if (window.widget)
		setTimeout ('widget.performTransition();', 0);
	document.getElementById('fliprollie').style.display = 'none';
}

var flipShown = false;

var animation = {duration:0, starttime:0, to:1.0, now:0.0, from:0.0, firstElement:null, timer:null};

function mousemove (event)
{
	if (is_Uploading)
	{
		return;
	} else if (is_Complete) {
		return;
	} else {
		if (!flipShown)
		{
			if (animation.timer != null)
			{
				clearInterval (animation.timer);
				animation.timer  = null;
			}		
			var starttime = (new Date).getTime() - 13;
			
			animation.duration = 500;
			animation.starttime = starttime;
			animation.firstElement = document.getElementById ('flip');
			animation.timer = setInterval ("animate();", 13);
			animation.from = animation.now;
			animation.to = 1.0;
			animate();
			flipShown = true;
		}
	}
}

function mouseexit (event)
{
	if (flipShown)
	{
		if (animation.timer != null)
		{
			clearInterval (animation.timer);
			animation.timer  = null;
		}
		
		var starttime = (new Date).getTime() - 13;
		
		animation.duration = 500;
		animation.starttime = starttime;
		animation.firstElement = document.getElementById ('flip');
		animation.timer = setInterval ("animate();", 13);
		animation.from = animation.now;
		animation.to = 0.0;
		animate();
		flipShown = false;
	}
}

function animate()
{
	var T;
	var ease;
	var time = (new Date).getTime();
		
	
	T = limit_3(time-animation.starttime, 0, animation.duration);
	
	if (T >= animation.duration)
	{
		clearInterval (animation.timer);
		animation.timer = null;
		animation.now = animation.to;
	}
	else
	{
		ease = 0.5 - (0.5 * Math.cos(Math.PI * T / animation.duration));
		animation.now = computeNextFloat (animation.from, animation.to, ease);
	}
	
	animation.firstElement.style.opacity = animation.now;
}

function limit_3 (a, b, c)
{
    return a < b ? b : (a > c ? c : a);
}

function computeNextFloat (from, to, ease)
{
    return from + (to - from) * ease;
}

function enterflip(event)
{
	document.getElementById('fliprollie').style.display = 'block';
}

function exitflip(event)
{
	document.getElementById('fliprollie').style.display = 'none';
}
