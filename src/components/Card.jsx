import React from "react"
function Card({ btnText="visit me" , carName, model , carImg ,info}) {
  return(
    <div class="w-[300px] rounded-md border">
  <img
    src={carImg}
    alt="Laptop"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">

    <h1 class="text-lg font-semibold">{carName}</h1>
    <h3>{model}</h3>
    <p class="mt-3 text-sm text-gray-600">
      {info}
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      {btnText}
    </button>
  </div>
</div>

  )

}

export default Card;