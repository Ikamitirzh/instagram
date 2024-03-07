
function MiniProfile() {
  return (
    <div className="flex item-center justify-between mt-14 ml-10">
        <img className="rounded-full border p-[2px] w-16 h-16" src="https://cdn.asriran.com/files/fa/news/1402/5/28/1622537_423.jpg" alt="" />
        <div className="flex-1 mx-4">
            <h2 className="font-bold">Puzzle</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>
        <button className="text-blue-400 text-sm font-semibold">Sign Out</button>

    </div>
  )
}

export default MiniProfile