
export default function Home() {
  return (
    <div className="p-4 flex items-center justify-center min-h-screen">
      <TailwindCSSButton />
    </div>
  );


function TailwindCSSButton (props) {
  return (
    <button className="bg-blue-500 text-white font-medium pl-4 px-4 py-2 rounded hover:bg-blue-600 inline-block">
      {props.children} Test Button{" "}
    </button>
  );
}

};