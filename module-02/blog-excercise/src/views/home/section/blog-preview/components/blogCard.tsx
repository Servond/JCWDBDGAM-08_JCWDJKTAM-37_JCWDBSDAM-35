import { IArticle } from "@/interfaces/article.interface";

export default function BlogCard(props: IArticle) {
  return (
    <div className="flex flex-col gap-2 border-none bg-gray-200 rounded-md p-4 h-80 w-72">
      <img
        src={props.image_path}
        alt={`img-${props.slug}`}
        className="w-full h-[150px] rounded-md"
      />
      <div className="flex flex-col">
        <h3 className="text-2xl">{props.title}</h3>
        <p className="text-gray-500 line-clamp-4">{props.description}</p>
      </div>
    </div>
  );
}
