import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const AddPlayer = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const playerInfo = {
      name: data.name,
      image: data.image,
      category: data.category,
      position: data.position,
      jersey: data.jersey,
      country: data.country,
      dob: data.dob,
      pob: data.pob,
      height: data.height,
      weight: data.weight,
      appearances: data.appearances,
      goal: data.goal,
      assist: data.assist

    };
    axiosPublic
      .post("/add-player", playerInfo)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          toast.success("Player Added Successfully! 😎");
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="w-full container mx-auto max-w-screen-xl p-10 bg-sky-100 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Add Player Here!!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <label className="block text-xl font-semibold text-gray-800">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.name && <span className="text-sky-600">Name is required</span>}
          </div>

          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Image URL</label>
            <input
              type="text"
              {...register("image", { required: true })}
              name="image"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-sky-400 dark:focus:border-sky-300 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.image && <span className="text-sky-600">Image is required</span>}
          </div>

  
          
          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Position Category</label>
            <select
              {...register("category", { required: true })}
              name="category"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="">Select Category</option>
              <option value="GOALKEEPERS">GOALKEEPERS</option>
              <option value="DEFENDERS">DEFENDERS</option>
              <option value="MIDFIELDERS">MIDFIELDERS</option>
              <option value="FORWARDS">FORWARDS</option>
              <option value="COACHING STAFF">COACHING STAFF</option>
            </select>
            {errors.category && <span className="text-sky-600">Position Category is required</span>}
          </div>
          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Position</label>
            <input
              type="text"
              {...register("position", { required: true })}
              name="position"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.position && <span className="text-sky-600">Position is required</span>}
          </div>
          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Jersey Number</label>
            <input
              type="text"
              {...register("jersey", { required: true })}
              name="jersey"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.jersey && <span className="text-sky-600">Jersey Number is required</span>}
          </div>

          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Country</label>
            <input
              type="text"
              {...register("country", { required: true })}
              name="country"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.country && <span className="text-sky-600">Country is required</span>}
          </div>

          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Date Of Birth</label>
            <input
              type="text"
              {...register("dob", { required: true })}
              name="dob"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.dob && <span className="text-sky-600">Date Of Birth is required</span>}
          </div>

          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Place Of Birth</label>
            <input
              type="text"
              {...register("pob", { required: true })}
              name="pob"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.pob && <span className="text-sky-600">Place Of Birth is required</span>}
          </div>


          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Weight</label>
            <input
              type="text"
              {...register("weight", { required: true })}
              name="weight"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.weight && <span className="text-sky-600">Weight is required</span>}
          </div>


          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Height</label>
            <input
              type="text"
              {...register("height", { required: true })}
              name="height"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.height && <span className="text-sky-600">Hight is required</span>}
          </div>



          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Appearances</label>
            <input
              type="text"
              {...register("appearances", { required: true })}
              name="appearances"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.appearances && <span className="text-sky-600">Appearances is required</span>}
          </div>




          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Goal</label>
            <input
              type="text"
              {...register("goal", { required: true })}
              name="goal"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.goal && <span className="text-sky-600">Goal is required</span>}
          </div>


          <div className="mt-4">
            <label className="block text-xl font-semibold text-gray-800">Assist</label>
            <input
              type="text"
              {...register("assist", { required: true })}
              name="assist"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg focus:border-sky-400 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.assist && <span className="text-sky-600">Assist is required</span>}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-4 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Add A New Player
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlayer;
