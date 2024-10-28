import React from 'react'
import { IMG_BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemsList = ({item}) => {

  const dispatch = useDispatch();

  const handleAddItem = (data) => {
    // dispatch an action
    console.log('added_data', data)
    dispatch(addItem(data))

  };

  return (
    <ul>
              {item?.itemCards?.map((item) => (
                <div className="mt-4 flex border-b-2 pb-8 justify-between">
                  <div className="w-[600px]">
                    <li
                      className="text-lg font-medium font-popins "
                      key={item?.card?.info?.id}
                    >
                      {item?.card?.info.name}
                    </li>
                    <p className="rupee-text">
                      ₹{" "}
                      {item?.card?.info?.defaultPrice / 100 ||
                        item?.card?.info?.price / 100}
                    </p>
                    <p className="font-popins text-gray-500 text-sm">
                      {item?.card?.info?.description !== undefined
                        ? item?.card?.info?.description
                        : "Please check or taste this dish."}
                    </p>
                  </div>

                  <div>
                    {item?.card?.info?.imageId !== undefined ? (
                      <div className="relative justify-center items-end flex">
                        <div className="absolute bottom-[-12]">
                          <button onClick={() => handleAddItem(item)} className="h-8 w-[85] border bg-white border-r-2 text-green-600 font-bold rounded-md shadow-lg">
                            ADD
                          </button>
                        </div>
                        <img
                          alt="img-logo"
                          className=" h-28 w-40 rounded-lg "
                          src={IMG_BASE_URL + item?.card?.info?.imageId}
                        />
                      </div>
                    ) : (
                        <div className="relative justify-center items-end flex">
                            <div className="absolute  bottom-[-12]">
                          <button onClick={() => handleAddItem(item)} className="h-8 w-[85] border bg-white border-r-2 text-green-600 font-bold rounded-md shadow-lg">
                            ADD
                          </button>
                        </div>
                        <div className="h-28 w-28 rounded-lg bg-gray-200"></div>
                        </div>
                    )}
                  </div>
                </div>
              ))}
            </ul>
  )
}

export default ItemsList