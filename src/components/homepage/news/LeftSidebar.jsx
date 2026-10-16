
import NavLink from "@/components/shared/NavLink";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">All Categories</h2>

      <ul className="flex flex-col gap-4 mt-6">
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              href={`/category/${category.id}`}
              className={`block text-lg font-bold text-center rounded-2xl p-2 ${
                activeId === category.id
                  ? "text-red-500 bg-green-300"
                  : "text-white bg-green-300"
              }`}
            >
              {category.nameBn}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
