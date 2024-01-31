export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto text-black ">
      <nav>
        <div></div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <div className="p-[150px] flex">
        <div>
          <h1 className="text-5xl text-center ">
            Workouts Made <br />{" "}
            <span className="text-emerald-500">Exclusively</span> For You
          </h1>
          <p className="text-center text-lg mt-[40px] mb-10 text-gray-400">
            We create <strong> exclusive and unique </strong>workouts for you.{" "}
            <br />
            Invest in <strong>your</strong> body and get much more performance{" "}
            <br />
            and quality of life.
          </p>
          <button className="p-2 ml-[140px] bg-emerald-400 text-white hover:bg-emerald-500">
            GET STARTED
          </button>
        </div>
        <div></div>
      </div>
      <footer></footer>
    </main>
  );
}
