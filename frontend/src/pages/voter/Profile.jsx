import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ProfilePhoto from "../../components/profile/ProfilePhoto";
import ProfileForm from "../../components/profile/ProfileForm";

import {
  getCurrentUser,
  updateCurrentUser,
  uploadProfilePhoto,
} from "../../services/userService";

function Profile() {
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    hasVoted: false,
    profilePhoto: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const response = await getCurrentUser();

      setUser(response.data);

      setForm({
        fullName: response.data.fullName || "",
        email: response.data.email || "",
        phone: response.data.phone || "",
        address: response.data.address || "",
        role: response.data.role || "",
        hasVoted: response.data.hasVoted,
        profilePhoto: response.data.profilePhoto || "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let photo = form.profilePhoto;

      if (selectedImage) {
        const upload = await uploadProfilePhoto(selectedImage);
        photo = upload.data.photo;
      }

      await updateCurrentUser({
        ...form,
        profilePhoto: photo,
      });

      toast.success("Profile Updated Successfully");

      loadProfile();
    } catch (error) {
      console.error(error);
      toast.error("Update Failed");
    }
  };

  if (!user) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-lg text-slate-400">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          {form.role === "ADMIN"
            ? "Update Profile"
            : "My Profile"}
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your personal information and profile photo.
        </p>

      </div>

      {/* Card */}

      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8 lg:p-10">

        <ProfilePhoto
          preview={preview}
          user={user}
          onImageChange={handleImageChange}
        />

        <div className="mt-10">

          <ProfileForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

        </div>

      </div>

    </div>
  );
}

export default Profile;