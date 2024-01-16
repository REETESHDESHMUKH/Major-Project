const stats = [
{ name: 'Number of Farms', stat: '10' },
{ name: 'Total Amount', stat: '76,999' },
{ name: 'Requests', stat: '2' },
{ name: 'Challenges',stat: '4'}
]
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]
export default function AccountDetails() {
    return (
        <form
              className="divide-y divide-gray-200 lg:col-span-9"
              action="#"
              method="POST"
        >
            <div className="py-6 px-4 sm:p-6 lg:pb-8">
                <div>
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Account
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                  <dl className="mt-5 mb-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
                    {stats.map((item) => (
                      <div
                        key={item.name}
                        className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
                      >
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {item.name}
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          {item.stat}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-white">
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Title
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Email
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Role
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                        {people.map((person) => (
                            <tr key={person.email}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                {person.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit<span className="sr-only">, {person.name}</span>
                                </a>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                <button
                  type="button"
                  className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-5 bg-indigo-500 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Save
                </button>
              </div>
        </form>
    )
}