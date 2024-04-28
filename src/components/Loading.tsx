import "./tailwind.css";
import { Skeleton, SVGSkeleton } from "./Skeleton";

const LoadingSkeleton = () => (
  <>
    <div className="flex flex-wrap justify-center items-center">
      <div className="max-w-80 w-80 shadow-md h-52 m-4">
        <div className="flex h-full">
          <div className="w-1/2 p-2">
            <SVGSkeleton className="object-cover w-[100px] h-[100px]" />
          </div>
          <div className="p-4 flex flex-col justify-between w-2/3">
            <div>
              <h2>
                <Skeleton className="w-[272px] max-w-full" />
              </h2>
              <p>
                <Skeleton className="w-[40px] max-w-full" />
              </p>
            </div>
            <div className="px-2 py-2 w-26 m-2 border-2 border-indigo-700">
              <a>
                <Skeleton className="w-[72px] max-w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-80 w-80 shadow-md h-52 m-4">
        <div className="flex h-full">
          <div className="w-1/2 p-2">
            <SVGSkeleton className="object-cover w-[100px] h-[100px]" />
          </div>
          <div className="p-4 flex flex-col justify-between w-2/3">
            <div>
              <h2>
                <Skeleton className="w-[280px] max-w-full" />
              </h2>
              <p>
                <Skeleton className="w-[40px] max-w-full" />
              </p>
            </div>
            <div className="px-2 py-2 w-26 m-2 border-2 border-indigo-700">
              <a>
                <Skeleton className="w-[72px] max-w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-80 w-80 shadow-md h-52 m-4">
        <div className="flex h-full">
          <div className="w-1/2 p-2">
            <SVGSkeleton className="object-cover w-[100px] h-[100px]" />
          </div>
          <div className="p-4 flex flex-col justify-between w-2/3">
            <div>
              <h2>
                <Skeleton className="w-[144px] max-w-full" />
              </h2>
              <p>
                <Skeleton className="w-[40px] max-w-full" />
              </p>
            </div>
            <div className="px-2 py-2 w-26 m-2 border-2 border-indigo-700">
              <a>
                <Skeleton className="w-[72px] max-w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-80 w-80 shadow-md h-52 m-4">
        <div className="flex h-full">
          <div className="w-1/2 p-2">
            <SVGSkeleton className="object-cover w-[100px] h-[100px]" />
          </div>
          <div className="p-4 flex flex-col justify-between w-2/3">
            <div>
              <h2>
                <Skeleton className="w-[104px] max-w-full" />
              </h2>
              <p>
                <Skeleton className="w-[40px] max-w-full" />
              </p>
            </div>
            <div className="px-2 py-2 w-26 m-2 border-2 border-indigo-700">
              <a>
                <Skeleton className="w-[72px] max-w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-80 w-80 shadow-md h-52 m-4">
        <div className="flex h-full">
          <div className="w-1/2 p-2">
            <SVGSkeleton className="object-cover w-[100px] h-[100px]" />
          </div>
          <div className="p-4 flex flex-col justify-between w-2/3">
            <div>
              <h2>
                <Skeleton className="w-[144px] max-w-full" />
              </h2>
              <p>
                <Skeleton className="w-[40px] max-w-full" />
              </p>
            </div>
            <div className="px-2 py-2 w-26 m-2 border-2 border-indigo-700">
              <a>
                <Skeleton className="w-[72px] max-w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-80 w-80 shadow-md h-52 m-4">
        <div className="flex h-full">
          <div className="w-1/2 p-2">
            <SVGSkeleton className="object-cover w-[100px] h-[100px]" />
          </div>
          <div className="p-4 flex flex-col justify-between w-2/3">
            <div>
              <h2>
                <Skeleton className="w-[344px] max-w-full" />
              </h2>
              <p>
                <Skeleton className="w-[40px] max-w-full" />
              </p>
            </div>
            <div className="px-2 py-2 w-26 m-2 border-2 border-indigo-700">
              <a>
                <Skeleton className="w-[72px] max-w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const SandboxPreview = () => (
  <div className="flex justify-center w-full h-full p-10">
    <LoadingSkeleton />
  </div>
);

export default SandboxPreview;