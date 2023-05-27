let contents = '';

const handleSubmit = (e) => {
    e.preventDefault();

    const newElement = document.createElement('li');
    newElement.textContent = contents;

    const fragment = document.createDocumentFragment();
    fragment.appendChild(newElement);

    const parentElement = document.querySelector('ul');
    parentElement.appendChild(fragment);

    const getKKK = document.getElementById('kkk');
    getKKK.value = ''

}

const changed = (e) => {
    contents = e.target.value;
    console.log(contents);
}




export function TodoList() {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="kkk" onChange={changed}  type="text" className='border-2 py-1 px-4 rounded-md' placeholder="ここに入力して下さい"/>
                <input type="submit" className='bg-red-400 py-1 px-4 rounded-md ml-3 hover:bg-red-600 duration-200 text-white'/>
            </form>
        </div>       
    )
  }

