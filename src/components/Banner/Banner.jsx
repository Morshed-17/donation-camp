import { useState } from "react";

const Banner = (props) => {
  const [search, setSearch] = useState("")
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    props.onSubmit(search)

  }
  
  return (


    <div className="bg-[url('https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] mt-[-119px] h-[600px]">
      <div className="hero-overlay bg-white bg-opacity-95 flex justify-center items-center">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-center text-2xl lg:text-5xl  font-bold">
            I Grow By Helping People In Need
          </h1>
          <form onSubmit={handleSubmit}>
            <fieldset className="form-control flex">
              <div className="relative lg:w-[470px]">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="input input-bordered w-full  pr-16"
                  value={search}
                  onChange={handleChange}
                />
                <button type="submit" className="btn bg-primaryRed text-white btn-error absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
