import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 p-5 h-screen lg:grid-cols-2 gap-1">
        <div className="flex justify-center items-center w-full bg-slate-50 h-3/4 rounded-xl shadow-md">
          <div>Col 1</div>
          <div>below</div>
        </div>
        <div className="w-full bg-slate-50 h-3/4 rounded-xl shadow-md">
          Col 2
        </div>
      </div>

      <div className="grid grid-cols-1 p-5 lg:grid-cols-2 gap-1">
        <div className="bg-slate-50">Div 1</div>
        <div className="bg-slate-50">Div 2</div>
      </div>
    </>
  );
}
