import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Cs2<span className="text-indigo-600">Stickers</span>
            </h2>
            <h3 className="text-xl md:text-3xl mt-10">BY: MSDEV</h3>
          </div>
          <div className="flex flex-wrap mt-10 justify-center">
            <div className="m-3">
              <Link
                href="/dashboard/all-stickers"
                title="Quicktoolz On Facebook"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="mx-auto">STICKERS</span>
              </Link>
            </div>
            <div className="m-3">
              <Link
                href="/dashboard/all-graffiti"
                title="Quicktoolz On Twitter"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="mx-auto">GRAFFITIS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
