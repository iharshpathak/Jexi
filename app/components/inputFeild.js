'use client'
import getCurrentLocation from '../utils/getCurrentLocation';
import getAddress from '../utils/getAddress';
import useMapStore from '../store/MapStore';
import useCabStore from '../store/CabStore';
import { toast } from "sonner"

function InputField({
  value,
  onChange,
  placeholder,
  suggestions,
  onSelect,
  showDropdown,
  onTouchStart,
  onBlur,
  onFocus,
}) {

  const { setSourceCoordinates } = useMapStore();
  const { setSourceValue,setDistance, setTempSourceValue} = useCabStore();

  const handleLocation = async () => {
    getCurrentLocation(
      async (lng, lat) => {
        setSourceCoordinates({ lng, lat });
        const address = await getAddress(lat, lng);
        setSourceValue(address);
        setTempSourceValue(address);
      },
      (err) => {
        const message = typeof err === 'string' ? err : err.message;
        toast(`Geolocation error ⚠️: ${message} !`, {
          icon: '🌍',
          style: {
            backgroundColor: '#EDFFA6',
            color: '#000000',
            fontWeight: '800',
            boxShadow: '8px 8px 0px #000',
            border: '4px solid #95FF00',
            borderRadius: '8px',
          },
        });

      }
    );
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center w-full">
        <input
          value={value}
          onChange={onChange}
          onTouchStart={onTouchStart}
          onBlur={onBlur}
          onFocus={onFocus}
          type="text"
          placeholder={placeholder}
          className="bg-transparent w-full outline-none focus:outline-none py-2 pr-12 sm:pr-6"
        />
        {/* Dropoff Location */}
        {placeholder === "Enter Dropoff Location" && value && (
          <button
            onClick={() => {
              setDistance('');
              onChange({ target: { value: '' } });
            }}
            className="absolute right-2 text-gray-500 hover:text-black hover:cursor-pointer hover:text-red-500"
          >
            &#x2715;
          </button>
        )}

        {/* Pickup Location */}
        {placeholder === "Enter Pickup Location" && (
          value === '' ? (
            <button
              onClick={handleLocation}
              className="absolute right-2 text-gray-500 hover:text-black hover:cursor-pointer hover:text-blue-500 hover:shadow-[4px_4px_0px_#000] hover:border-black hover:rounded-full hover:border-2 hover:w-[25px] hover:h-[25px] transition duration-300 ease-in-out hover:bg-yellow-500"
            >
              &#x1F4CD;
            </button>
          ) : (
            <button
              onClick={() => {
                onChange({ target: { value: '' } });
                setDistance('');
              }}
              className="absolute right-2 text-gray-500 hover:text-black hover:cursor-pointer hover:text-red-500"
            >
              &#x2715;
            </button>
          )
        )}

      </div>

      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute top-full z-10 bg-white border border-gray-300 w-full max-h-60 overflow-y-auto shadow-[4px_4px_0px_#000] mt-1">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => onSelect(item.description)}
              className="px-4 py-2 hover:bg-orange-100 active:bg-orange-100 cursor-pointer"
            >
              {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

 export default InputField