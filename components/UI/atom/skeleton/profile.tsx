export const ProfileSkeletonCard = () => {
    return (
      <>
        <div className="w-full max-w-xs sm:w-auto animate-pulse rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg bg-gray-300 animate-pulse" src="/images/avatar.jpg" alt="Avatar image" />
            <h5 className="h-6 w-11/12 rounded-md bg-gray-300 animate-pulse"></h5>
            <span className="h-6 w-11/12 rounded-md bg-gray-300 animate-pulse"></span>
                <div className="flex mt-4 space-x-3 lg:mt-6 px-3">
                    <ul>
                    <li className="h-6 w-11/12 rounded-md bg-gray-300 animate-pulse"></li>
                    <li className="h-6 w-11/12 rounded-md bg-gray-300 animate-pulse"></li>
                    <li className="h-6 w-11/12 rounded-md bg-gray-300 animate-pulse"></li>
                    </ul>
                </div>
            </div>
        </div>
      </>
    );
  };