import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

type MobilePhotosProps = {
  images: string[];
};

const MobilePhotos = ({ images }: MobilePhotosProps) => {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-full h-auto">
            <PhotoView key={index} src={image}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="h-full w-[15rem] rounded-md object-fill"
                height={80}
                width={50}
              />
            </PhotoView>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default MobilePhotos;
