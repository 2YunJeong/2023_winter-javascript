let array = ["0단계","1단계","2단계","3단계"];

function Input()  {
		event.preventDefault();
		const name = document.getElementById('myInput').value;
		console.log(name);
		fetch("../json/food.json")
		//string화 시키는것
		.then(function (response) {
			return response.json();
		})
		// return 된 response를 products로 받고 다시 진행
		.then(function (products) {
			
			var i = 0;
			let placeholder = document.querySelector("#images-container");
			let out = `<div >`;
			//for 문을 배열 형태로 사용한 for - of 문
			
			if (!name) {
			for (let product of products) {
				i++;
				out += `
				<div class ="image-wrapper"  style = " flaot : left; margin: 10px 20px; display:inline-block;width:300px; height:200px;border: 1px solid black">
					<img id = ${product.id} src='${product.image}'  style ="height:200px; width: auto ;display: flex;margin: auto;"> 
				</div>
			`;

			if(i%4 == 0) {
				out += `</div><div>`
			}
			}
			out += `</div>`
			placeholder.innerHTML = out;
			}
		else {
			for (let product of products) {
				if (product.name.indexOf(name) != -1) {
				i++;
				out += `
				<div class ="image-wrapper"  style = " flaot : left; margin: 10px 20px; display:inline-block;width:300px; height:200px;border: 1px solid black">
					<img id = ${product.id} src='${product.image}'  style ="height:200px ;  width: auto ;display:flex; margin: auto;"> 
				</div>
			`;

			if(i%4 == 0) {
				out += `</div><div>`
			}
			}}
			out += `</div>`
			placeholder.innerHTML = out;

		}
		
		
		const imageContainer = document.querySelector("#images-container");
		const lightbox = document.querySelector("#lightbox");
	
		imageContainer.addEventListener("click", function(event){
			//크게 보이게 하기
			const imageWrapper = event.target.closest(".image-wrapper")//closet = event의 가장 가까운 요소를 target 으로 붙잡는것.
	
			if(imageWrapper) {
				const image = imageWrapper.querySelector("img");
				console.log(event.target.id);
				if (image) {
					image.style.height = "500px";
					lightbox.innerHTML = `<div style = "display:absolute; top : 100px;"><div class="close-lightbox" ></div>`+ image.outerHTML+
					`<br><div id = "explain" >`
				
					lightbox.innerHTML += `</div>`;
					lightbox.classList.add("show")

					for (let product of products){
						if (product.id == event.target.id){
							let o = `<div style = "width:1200px">` ;
							o += `<div class = "square">이름</div>`;
							o += `<div class = "square">가격</div>`;
							o += `<div class = "square">맵기</div>`;
							o += `<div class = "square">브랜드</div></div>`;

							o += `<div style = "width:1200px" >`;
							o += `<div class = "square">${product.name}</div>`;
							o += `<div class = "square">${product.price}원</div>`;
							o += `<div class = "square">${array[product.spicy]}</div>`;
							o += `<div class = "square">${product.brand}</div>`;
							o += "</div>"
							document.querySelector("#explain").innerHTML = o;
						}
					}
				}
				image.style.height = "200px"
			}

			


			//버튼을 통해 끄기
			lightbox.addEventListener("click",function(e){
				if(!e.target.hasAttribute('src')) {
					lightbox.classList.remove("show");
				}
			})
		})
		});
		

		
	  }
