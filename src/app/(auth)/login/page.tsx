'use client'
import Form from "../_layout/Form";

export default function LoginPage() {
  return (
    <Form label="Login to your account">
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" name="email" id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" name="password" id="password" placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required />
        </div>
        {/* <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="terms" aria-describedby="terms" type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and
                Conditions</a></label>
          </div>
        </div> */}
        <button type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login
          to account</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account? <a href="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</a>
        </p>
      </form>
    </Form>
  );
}