import Link from "next/link";
export default function DivRoute({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <div className="w-full h-[25vh] bg-yellow flex items-center">
      <div className="lg:ps-32 ps-5">
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-md mt-2 italic">
          <Link href={"/"}>Trang chủ</Link> &#10132;{" "}
          <Link href={path}>{title}</Link>
        </div>
      </div>
    </div>
  );
}
