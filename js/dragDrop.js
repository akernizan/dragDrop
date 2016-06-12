var pictures = [];
var addBtn = document.getElementById('addBtn');
var slideShow = document.getElementById('slideShow');


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
	});

	showSlideShow(image)
}


function showSlideShow(img) {
	slideShow.style.backgroundImage = img;
	slideShow.style.backgroundRepeat = 'no-repeat';
	slideShow.style.backgroundSize = '100%';
	slideShow.style.backgroundPosition = 'center center'
}