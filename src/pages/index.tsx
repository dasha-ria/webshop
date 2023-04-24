export default function Home() {
  return (
    <body className="w-screen h-screen bg-white">
      <div className="flex items-end">
        <img className="w-40 h-auto ml-12 pt-8" src="studio47.svg"></img>

        <ul className="flex gap-4 ml-12">
          <li className="font-bold text-lg">Home</li>
          <li className="font-bold text-lg underline underline-offset-4">
            Shop
          </li>
          <li className="font-bold text-lg">About</li>
        </ul>
      </div>
      <div className="flex gap-12 flex-wrap pt-12 ml-12 w-full">
        <div>
          <img
            className="w-56 h-56 object-cover rounded-md"
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          ></img>
          <p>Name</p>
          <p>Price</p>
        </div>
        <div>
          <img
            className="w-56 h-56 object-cover rounded-md"
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          ></img>
          <p>Name</p>
          <p>Price</p>
        </div>
        <div>
          <img
            className="w-56 h-56 object-cover rounded-md"
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          ></img>
          <p>Name</p>
          <p>Price</p>
        </div>
      </div>
    </body>
  );
}
