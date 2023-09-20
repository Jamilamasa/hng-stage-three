import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const products = [
  {
    id: "earthen",
    name: "Earthen Bottle",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: "nomad",
    name: "Nomad Tumbler",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: "jamil",
    name: "Focus Paper Refill",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: "amasa",
    name: "Machined Mechanical Pencil",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: "damilola",
    name: "Coffee",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: "oladimeji",
    name: "Box",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: "eyitayo",
    name: "Scissors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: "ayodele",
    name: "Wallet",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const ImageGallery = () => {
  const [characters, updateCharacters] = useState(products);
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  };
  // Function to handle input change and filter characters
  const filter = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredCharacters = products.filter(
      (characters) =>
        characters.name.toLowerCase().includes(searchTerm) ||
        characters.name.includes(searchTerm)
    );

    updateCharacters(filteredCharacters);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1>Filter Image below</h1>
        <input
          type="text"
          className="w-full border border-zinc-950 border-solid p-6  text-lg"
          onChange={filter}
        />
        <h1 className="font-bold text-2xl">Images</h1>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map((product, index) => {
                  return (
                    <Draggable
                      key={product.id}
                      draggableId={product.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          className=" w-full rounded-lg bg-gray-200"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                          <h1>{product.name}</h1>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default ImageGallery;
