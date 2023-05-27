

function App() {
  return (
    <>
    <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex p-4 mx-auto">
        <a href="#">
          <span className="font-bold text-xl">Yuto Code</span>
        </a>
        <nav className="ml-auto">
          <a href="#home" className="mr-5 hover:text-green-400 duration-300">Home</a>
          <a href="#about" className="mr-5 hover:text-green-400 duration-300">About</a>
          <a href="#skills"className="mr-5 hover:text-green-400 duration-300">Skills</a>
          <a href="#blog" className="hover:text-green-400 duration-300">Blog</a>
        </nav>
      </div>
    </header>

    <section id="home" className="text-gray-700 border-b border-gray-200 pb-5">
      <div className="container flex mx-auto px-5 flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:1/2 flex-grow mb-5 md:mb-0">
          <h1 className="font-medium text-3xl text-gray-900 mb-2">
              Hi!
              <br />
              I'm YutoCode
              <br />
              Web
              <br />
              Developer
          </h1>
          <p className="leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam molestias magni vel aliquid tempora? Iusto maxime repellendus iste sequi consequuntur.</p>
          <button className=" bg-green-500 rounded py-1 px-4 text-white hover:bg-green-700 duration-300 mt-4">Contact</button>
        </div>
        <div className="md:w-4/5">
          <img src="./img/icon.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section id="about" className="text-gray-700 border-b border-gray-200 pb-9 mt-20">
      <div className="container mx-auto px-5">
        {/* title */}
        <div className="text-center">
          <h2 className="mb-2 text-2xl text-gray-900">About Me</h2>
          <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, dolor dolores veniam voluptatibus tempora dignissimos sit expedita enim. Sed accusantium dolore non dolorem porro incidunt cum eum veniam suscipit iure aut ipsa a alias tenetur enim provident quam animi unde, amet quos. Autem ab quas iure, rem nam repellendus optio excepturi, cupiditate enim animi est hic perspiciatis quo! Recusandae illo assumenda dolores id exercitationem nostrum, est fuga animi fugit fugiat? Magni deserunt eveniet iure deleniti quibusdam reprehenderit, totam laboriosam illum tempore explicabo culpa possimus hic, nostrum officiis tempora laborum in eum labore quam quaerat esse voluptatem ducimus earum. Fuga, in!</p>
        </div>
        {/* container */}
        <div className="container flex mt-8 flex-col items-center md:flex-row">
          <div className="md:w-1/3 bg-gray-200 rounded-lg p-5 m-4 box-border">
            <div className="flex items-center text-center mb-2">
              <div className="bg-green-500 p-1 rounded-full text-white mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4975 5.02988C16.4973 5.07798 16.4959 5.12581 16.4934 5.17335C17.662 5.58332 18.5 6.69628 18.5 8.00496V9.00493H19.5V13.0049H18.5V16.005C18.5 17.3129 17.663 18.4254 16.4953 18.8359C16.4984 18.8919 16.5 18.9482 16.5 19.005C16.5 20.6618 15.1569 22.005 13.5 22.005H9.5C7.84315 22.005 6.5 20.6618 6.5 19.005C6.5 18.9482 6.50158 18.8919 6.50468 18.8359C5.33705 18.4254 4.5 17.3129 4.5 16.005V8.00496C4.5 6.69767 5.33618 5.58568 6.50286 5.17465C6.49907 5.11032 6.4973 5.04546 6.49763 4.98011C6.50587 3.32328 7.85569 1.98683 9.51252 1.99508L13.5125 2.01499C15.1693 2.02324 16.5058 3.37305 16.4975 5.02988ZM8.49764 5.00496H14.4975C14.4922 4.45954 14.0498 4.01769 13.5025 4.01496L9.50257 3.99505C8.95029 3.99231 8.50035 4.43779 8.4976 4.99006L8.49764 5.00496ZM15.7049 7.02596L11.4846 7.00496H7.5C6.94772 7.00496 6.5 7.45267 6.5 8.00496V16.005C6.5 16.5568 6.94696 17.0042 7.4986 17.005H15.5014C16.053 17.0042 16.5 16.5568 16.5 16.005V8.00496C16.5 7.52289 16.1589 7.12049 15.7049 7.02596ZM8.5 19.005C8.5 19.5572 8.94772 20.005 9.5 20.005H13.5C14.0523 20.005 14.5 19.5572 14.5 19.005H8.5Z"
                  fill="currentColor"
                />
              </svg>
              </div>
              <h3 className="font-medium text-gray-900">Web Developer</h3>
            </div>
            <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, explicabo.</p>
            <a href="#" className="text-green-500 flex mt-3 hover:text-green-700 duration-300">もっと見る
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                fill="currentColor"
              />
            </svg>
            </a>
          </div>
          <div className="md:w-1/3 bg-gray-200 rounded-lg p-5 m-4 box-border">
            <div className="flex items-center text-center mb-2">
              <div className="bg-green-500 p-1 rounded-full text-white mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4975 5.02988C16.4973 5.07798 16.4959 5.12581 16.4934 5.17335C17.662 5.58332 18.5 6.69628 18.5 8.00496V9.00493H19.5V13.0049H18.5V16.005C18.5 17.3129 17.663 18.4254 16.4953 18.8359C16.4984 18.8919 16.5 18.9482 16.5 19.005C16.5 20.6618 15.1569 22.005 13.5 22.005H9.5C7.84315 22.005 6.5 20.6618 6.5 19.005C6.5 18.9482 6.50158 18.8919 6.50468 18.8359C5.33705 18.4254 4.5 17.3129 4.5 16.005V8.00496C4.5 6.69767 5.33618 5.58568 6.50286 5.17465C6.49907 5.11032 6.4973 5.04546 6.49763 4.98011C6.50587 3.32328 7.85569 1.98683 9.51252 1.99508L13.5125 2.01499C15.1693 2.02324 16.5058 3.37305 16.4975 5.02988ZM8.49764 5.00496H14.4975C14.4922 4.45954 14.0498 4.01769 13.5025 4.01496L9.50257 3.99505C8.95029 3.99231 8.50035 4.43779 8.4976 4.99006L8.49764 5.00496ZM15.7049 7.02596L11.4846 7.00496H7.5C6.94772 7.00496 6.5 7.45267 6.5 8.00496V16.005C6.5 16.5568 6.94696 17.0042 7.4986 17.005H15.5014C16.053 17.0042 16.5 16.5568 16.5 16.005V8.00496C16.5 7.52289 16.1589 7.12049 15.7049 7.02596ZM8.5 19.005C8.5 19.5572 8.94772 20.005 9.5 20.005H13.5C14.0523 20.005 14.5 19.5572 14.5 19.005H8.5Z"
                  fill="currentColor"
                />
              </svg>
              </div>
              <h3 className="font-medium text-gray-900">Web Developer</h3>
            </div>
            <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, explicabo.</p>
            <a href="#" className="text-green-500 flex mt-3 hover:text-green-700 duration-300">もっと見る
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                fill="currentColor"
              />
            </svg>
            </a>
          </div>
          <div className="md:w-1/3 bg-gray-200 rounded-lg p-5 m-4 box-border">
            <div className="flex items-center text-center mb-2">
              <div className="bg-green-500 p-1 rounded-full text-white mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4975 5.02988C16.4973 5.07798 16.4959 5.12581 16.4934 5.17335C17.662 5.58332 18.5 6.69628 18.5 8.00496V9.00493H19.5V13.0049H18.5V16.005C18.5 17.3129 17.663 18.4254 16.4953 18.8359C16.4984 18.8919 16.5 18.9482 16.5 19.005C16.5 20.6618 15.1569 22.005 13.5 22.005H9.5C7.84315 22.005 6.5 20.6618 6.5 19.005C6.5 18.9482 6.50158 18.8919 6.50468 18.8359C5.33705 18.4254 4.5 17.3129 4.5 16.005V8.00496C4.5 6.69767 5.33618 5.58568 6.50286 5.17465C6.49907 5.11032 6.4973 5.04546 6.49763 4.98011C6.50587 3.32328 7.85569 1.98683 9.51252 1.99508L13.5125 2.01499C15.1693 2.02324 16.5058 3.37305 16.4975 5.02988ZM8.49764 5.00496H14.4975C14.4922 4.45954 14.0498 4.01769 13.5025 4.01496L9.50257 3.99505C8.95029 3.99231 8.50035 4.43779 8.4976 4.99006L8.49764 5.00496ZM15.7049 7.02596L11.4846 7.00496H7.5C6.94772 7.00496 6.5 7.45267 6.5 8.00496V16.005C6.5 16.5568 6.94696 17.0042 7.4986 17.005H15.5014C16.053 17.0042 16.5 16.5568 16.5 16.005V8.00496C16.5 7.52289 16.1589 7.12049 15.7049 7.02596ZM8.5 19.005C8.5 19.5572 8.94772 20.005 9.5 20.005H13.5C14.0523 20.005 14.5 19.5572 14.5 19.005H8.5Z"
                  fill="currentColor"
                />
              </svg>
              </div>
              <h3 className="font-medium text-gray-900">Web Developer</h3>
            </div>
            <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, explicabo.</p>
            <a href="#" className="text-green-500 flex mt-3 hover:text-green-700 duration-300">もっと見る
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                fill="currentColor"
              />
            </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" className="text-gray-700 border-b border-gray-200 pb-9 mt-20">
      <div className="container mx-auto px-5 flex items-center flex-col md:flex-row">
        {/* left side */}
        <div className="md:w-1/2 mr-5">
          <img src="./img/pc.jpg" alt="" className=""/>
        </div>
        {/* right side */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-2xl text-gray-900 text-center md:text-left">My Skills</h2>
          <h3>HTML</h3>
          <div className="bg-green-200 mb-2">
            <div className="bg-green-500 w-2/3 text-white text-center text-xs p-1">85%</div>
          </div>
          <h3>CSS</h3>
          <div className="bg-green-200 mb-2">
            <div className="bg-green-500 w-2/3 text-white text-center text-xs p-1">85%</div>
          </div>
          <h3>JavaScript</h3>
          <div className="bg-green-200 mb-2">
            <div className="bg-green-500 w-2/3 text-white text-center text-xs p-1">85%</div>
          </div>
          <h3>HTML</h3>
          <div className="bg-green-200">
            <div className="bg-green-500 w-2/3 text-white text-center text-xs p-1">85%</div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
