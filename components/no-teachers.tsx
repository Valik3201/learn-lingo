export function NoTeachers() {
  return (
    <div className="text-center h-full py-8 space-y-4">
      <h2 className="text-xl font-semibold">No Teachers Available</h2>
      <p className="text-gray-600">
        Sorry, there are currently no teachers that match your criteria.
      </p>
      <p className="text-gray-600">
        Please try adjusting your filters or check back later.
      </p>
    </div>
  );
}
