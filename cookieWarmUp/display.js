
let cookieContainer = document.getElementById('get_cookie');

let getCookie = Cookies.get('image_url');

if(getCookie === undefined){
    cookieContainer.insertAdjacentHTML(`afterbegin`, `<h3>Thereis an error</h3>`);


}else{
    container.insertAdjacentHTML('beforeend', `<div>

        <img src="${getCookie} alt="image"width="300"/>
        
        </div>`)
}