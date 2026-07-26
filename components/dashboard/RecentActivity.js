 import { recentActivity } from '@/data/dashboard';

export default function RecentActivity() {
  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Recent Activity</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            {/* Avatar */}
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: activity.color + '20' }}
            >
              <span
                className="text-xs font-bold"
                style={{ color: activity.color }}
              >
                {activity.user.charAt(1).toUpperCase()}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-700 leading-relaxed">
                User{' '}
                <span
                  className="font-semibold"
                  style={{ color: activity.color }}
                >
                  {activity.user}
                </span>{' '}
                {activity.action}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
