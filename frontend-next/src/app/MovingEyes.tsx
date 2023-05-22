export default function MovingEyes() {
  return (
    <>
      <div className="flex justify-start items-center p-5 space-x-5">
        <div className="h-24 w-24 bg-slate-400 rounded-full">
          <div className="h-12 w-12 bg-slate-600 rounded-full"></div>
        </div>

        <div className="flex h-24 w-24 bg-slate-400 rounded-full justify-center">
          <div className="bg-blue-400 flex pt-2 rotate-[90deg]">
            <div className="h-12 w-12 bg-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}
