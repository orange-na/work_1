

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

    <section className="text-gray-700">
      <div className="container flex mx-auto px-5 flex-col md:flex-row items-center">
        <div className="md:1/2 flex-grow">
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
    </>
  )
}

export default App
