export default function ImgPreview({ image }) {
  return (
    <div className="productImage self-center w-[200px] h-[200px] m-4">
      <img
        src={image}
        alt="product image"
        className="object-contain w-full h-full"
      />
    </div>
  );
}
