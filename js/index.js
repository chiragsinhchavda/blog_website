console.log('iamindex...')
const url = 'https://newsapi.org/v2/top-headlines?' +
	'country=in&' +
	'apiKey=991a0d09788e411a9715bb6cc4397a55';

fetch(url)
	.then(function (response) {
		let data = response.json();
		data.then(
			getData => {
				let articles = getData.articles;
				let blogs = document.getElementById('blog');
				articles.forEach(element => {
					console.log(element.url)
					blogs.innerHTML += `<div class="blogs">
											<div class="img">
												<img src=${element.urlToImage} alt="blog" srcset="">
											</div>
											<h3 id="title" class="titles"><a target="_blank" href=${element.url}>${element.title}</a></h3>
											<p id="discription" class="discs">${element.description}</p>
											<p id="date" class="dates">Published on : ${element.publishedAt.split('T')[0]}</p>
										</div>`;
				});
			}
		);
	})