import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center max-w-md">

                <p className="text-7xl sm:text-8xl font-bold text-blue-600">
                    404
                </p>

                <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
                    Page Not Found
                </h1>

                <p className="mt-3 text-gray-500">
                    Sorry, the page you are looking for does not exist
                    or may have been moved.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
};

export default NotFound;