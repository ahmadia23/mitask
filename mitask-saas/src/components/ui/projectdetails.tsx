/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UocM1PR0JVX
 */
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "./Cards";

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="w-64 h-full border-r dark:border-gray-800 dark:bg-gray-800">
        <div className="flex items-center justify-center mt-10">
          <ActivityIcon className="w-12 h-12 text-white dark:text-gray-900" />
        </div>
        <div className="mt-10 px-4">
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700 hover:text-white dark:hover:text-gray-900"
            href="#"
          >
            Tasks
          </Link>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700 hover:text-white dark:hover:text-gray-900"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700 hover:text-white dark:hover:text-gray-900"
            href="#"
          >
            Settings
          </Link>
        </div>
      </nav>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <img
              alt="Project Theme"
              className="w-full h-64 object-cover mb-8 rounded-lg"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width="300"
            />
            <h2 className="text-lg font-semibold text-gray-600 dark:text-white">
              Task Details
            </h2>
          </div>
          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-lg font-medium">
                Design new homepage
              </CardTitle>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Due in 3 days
              </span>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                In Progress
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                This task involves designing a new homepage for our website. The
                design should be user-friendly and responsive for all devices.
              </p>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-600 dark:text-white">
                  Related Project:
                </h3>
                <div className="flex items-center mt-2">
                  <img
                    alt="Project Image"
                    className="w-12 h-12 rounded-full"
                    height="50"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width="50"
                  />
                  <span className="ml-4 text-sm text-gray-600 dark:text-gray-300">
                    Redesign Website
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
