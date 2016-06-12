var pictures = [];
var addBtn = document.getElementById('addBtn');
var slideShow = document.getElementById('slideShow');
var play = document.getElementById('startSS');

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData('text');
	ev.target.appendChild(document.getElementById(data));

	//	pictures.push(ev.target);
}

function previewFile() {
	var preview = document.querySelector('img');
	var file = document.querySelector('input[type=file]').files[0];
	var reader = new FileReader();

	reader.addEventListener("load", function () {
		preview.src = reader.result;
	}, false);

	if (file) {
		reader.readAsDataURL(file);
	}

	addToSlideShow(preview)
}

function addToSlideShow(image) {
	addBtn.addEventListener('click', function () {
		pictures.push(image);
		console.log(pictures);

		$(image).fadeOut('slow');

	});
}


function showSlideShow() {



	play.addEventListener('click', function () {
		if (pictures.length == 0) {
			alert("You haven't added any picutres!!")
		}


		for (var i = 0; i < pictures.length; i++) {

		}

		var i = 0;
		setInterval(function () {
			var image = pictures[i++];


			slideShow.style.backgroundImage = 'url(' + image + ')';
			slideShow.style.backgroundRepeat = 'no-repeat';
			slideShow.style.backgroundSize = '100%';
			slideShow.style.backgroundPosition = 'center center'


			if (i == pictures.length) i = 0;
		}, 1000);
	});

}

showSlideShow();