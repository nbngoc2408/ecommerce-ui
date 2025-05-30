import { useForm } from 'react-hook-form'

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    // TODO: Connect to backend API
    alert('Logged in!\n' + JSON.stringify(data, null, 2))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-indigo-100"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-800 text-center">Sign In</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">Password</label>
          <input
            {...register('password', { required: 'Password is required' })}
            type="password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}