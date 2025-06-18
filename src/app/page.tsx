import { HomeIcon, UserGroupIcon, HomeModernIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const stats = [
  { name: 'Total Leads', value: '0', icon: UserGroupIcon },
  { name: 'Active Properties', value: '0', icon: HomeModernIcon },
  { name: 'Pending Transactions', value: '0', icon: CurrencyDollarIcon },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </dd>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Recent Leads</h2>
            <div className="mt-6">
              <p className="text-sm text-gray-500">No leads yet. Start by adding your first lead!</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Recent Properties</h2>
            <div className="mt-6">
              <p className="text-sm text-gray-500">No properties yet. Add your first property listing!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
