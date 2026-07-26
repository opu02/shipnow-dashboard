 export default function StatusBadge({ status }) {
  const styles = {
    'Delivery': 'bg-blue-100 text-blue-700',
    'Completed': 'bg-green-100 text-green-700',
    'Pending': 'bg-yellow-100 text-yellow-700',
    'In Transit': 'bg-purple-100 text-purple-700',
    'Out for Delivery': 'bg-blue-100 text-blue-700',
    'Processing': 'bg-orange-100 text-orange-700',
  };

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
}
