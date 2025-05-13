import { useAuth } from "../../context/AuthContext";

function MyProfile() {
  const { user } = useAuth();

  function formatMemberSince(dateString) {
    const date = new Date(dateString);
    const formatted = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(date);
    return `2DAYOUTFIT Member Since ${formatted}`;
  }

  return (
    <div className="p-4 mt-10 flex flex-col items-center w-full lg:flex-row lg:p-8">
      {/* Info section */}
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <img
          src="https://res.cloudinary.com/draqaiefe/image/upload/v1746721729/306fd0fb64f67ff40f81d8e37f8bf674_w0aeqs.jpg"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/*info */}

      <div className="flex flex-col items-center mt-4 lg:items-start lg:ml-4">
        <h1 className="text-3xl font-bold">{user?.name || "Guest"}</h1>
        <p className="text-gray-500 text-base mt-1">
          {user?.createdAt ? formatMemberSince(user.createdAt) : ""}
        </p>
      </div>

      {/* Button */}
      <button className="hidden mt-6 px-6 py-2 border rounded-full text-black items-center gap-2 hover:bg-gray-100 transition">
        View Member Pass
      </button>
    </div>
  );
}

export default MyProfile;
