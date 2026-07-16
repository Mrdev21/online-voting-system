import { useRef } from "react";

function ProfilePhoto({
  preview,
  user,
  onImageChange,
}) {
  const inputRef = useRef();

  return (
    <div className="mb-10 flex flex-col items-center">

      <img
        src={
          preview
            ? preview
            : user.profilePhoto
            ? `http://localhost:8080${user.profilePhoto}`
            : "https://ui-avatars.com/api/?name=" +
              encodeURIComponent(user.fullName) +
              "&background=0891b2&color=fff&size=200"
        }
        alt="Profile"
        className="h-36 w-36 rounded-full border-4 border-cyan-500 object-cover shadow-lg"
      />

      <button
        onClick={() => inputRef.current.click()}
        type="button"
        className="mt-5 rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-600"
      >
        Change Photo
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={onImageChange}
      />

    </div>
  );
}

export default ProfilePhoto;