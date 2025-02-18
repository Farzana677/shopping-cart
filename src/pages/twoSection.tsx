import { useState, useEffect } from "react";
import ProductsAll from "../pages/productsall";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { MdFilterListOff, MdFilterList } from "react-icons/md";

function Sidebar() {
  const [value, setValue] = useState("");
  const [checkedItems, setCheckedItems] = useState({
    Electronics: false,
    Jewelry: false,
    "Men's Clothing": false,
    "Women's Clothing": false,
  });
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const menuItems = [
    { label: "Electronics" },
    { label: "Jewelry" },
    { label: "Men's Clothing" },
    { label: "Women's Clothing" },
  ];

  const handleCheckboxChange = (label: keyof typeof checkedItems) => {
    setCheckedItems((prevState) => {
      const newCheckedItems = Object.keys(prevState).reduce((acc, key) => {
        (acc as Record<string, boolean>)[key] = false;
        return acc;
      }, {} as typeof checkedItems);
      newCheckedItems[label] = true;
      return newCheckedItems;
    });
  };

  const handleClearFilters = () => {
    setCheckedItems({
      Electronics: false,
      Jewelry: false,
      "Men's Clothing": false,
      "Women's Clothing": false,
    });
  };

  const selectedCategories = Object.entries(checkedItems)
    .filter(([_, isChecked]) => isChecked)
    .map(([category]) => category.toLowerCase());

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarVisible(true);
      } else {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Filter Toggle Button */}
      <button
        className="fixed top-50 left-4 z-50 md:hidden bg-white p-2 rounded-lg shadow-lg"
        onClick={() => setSidebarVisible(!sidebarVisible)}
      >
        {sidebarVisible ? (
          <MdFilterListOff size={24} className="text-gray-600" />
        ) : (
          <MdFilterList size={24} className="text-gray-600" />
        )}
      </button>

      {/* Overlay */}
      {sidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarVisible(false)}
        />
      )}

      <section className="flex gap-2">
        {/* Sidebar */}
        <div
          className={`fixed md:sticky top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
            sidebarVisible ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="p-6 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Search</h3>
              <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full border rounded-lg p-2"
                placeholder="Search products"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Category</h3>
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Checkbox
                      checked={
                        checkedItems[item.label as keyof typeof checkedItems]
                      }
                      onChange={() =>
                        handleCheckboxChange(
                          item.label as keyof typeof checkedItems
                        )
                      }
                      className="w-5 h-5"
                    />
                    <span className="text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleClearFilters}
              className="w-full bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Main Content */}

        <ProductsAll
          selectedCategories={selectedCategories}
          searchQuery={value}
        />
      </section>
    </>
  );
}

export default Sidebar;
