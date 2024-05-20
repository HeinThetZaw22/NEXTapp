import Link from "next/link";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className=" w-full max-w-full flex-start flex-col ">
      <h1 className="head_text text-left">
        <span className=" blue_gradient">{type} post</span>
      </h1>
      <p className=" desc text-left max-w-md">
        {type} and share amazing prompts to the world
      </p>
      <form onSubmit={handleSubmit} className=" mt-10 w-full max-w-2xl flex-col flex gap-7 glassmorphism">
        <label className=" flex flex-col">
          <span className=" font-satoshi font-semibold text-base text-gray-700">
            Your Ai Prompt
          </span>
          <textarea
          value={post.prompt}
          onChange={(e) => {setPost({...post, prompt: e.target.value})}}
          placeholder="Write your prompt here"
          className=" form_textarea"
          />
        </label>
        <label className=" flex flex-col">
          <span className=" font-satoshi font-semibold text-base text-gray-700">
            Tag { ` `}
            <span className=" font-normal">(#webdevelopment, #product, #idea)</span>
          </span>
          <textarea
          value={post.tag}
          onChange={(e) => {setPost({...post, tag: e.target.value})}}
          placeholder="Tag"
          className=" form_input"
          />
        </label>
        <div className=" flex flex-end  mx-3 mb-5 gap-4">
          <Link href={"/"}  className=" text-gray-500 hover:scale-90 transition bg-gray-300 px-5 py-2 rounded-full text-sm">Cancel</Link>
          <button className=" px-5 py-1.5 hover:scale-90 transition rounded-full bg-primary-orange text-white" type="submit" disabled={submitting}>
              {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
