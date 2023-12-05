import { Divider } from "@nextui-org/react";

export const Copyright = () => {
  return (
    <>
      <Divider />
      <div className="flex items-center justify-center py-4 text-gray-400">
        <p className="text-sm">
          &copy; 2023{" "}
          <a href="/" className="text-gray-400 hover:text-gray-500">
            Kelompok 3 PAT
          </a>
        </p>
      </div>
    </>
  );
};
